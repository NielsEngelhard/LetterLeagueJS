CREATE TYPE "public"."user_role" AS ENUM('admin', 'user', 'guest');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"hashedPassword" text NOT NULL,
	"salt" text NOT NULL,
	"role" "user_role" NOT NULL,
	"level" integer NOT NULL,
	"colorHex" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_sessions" (
	"sessionId" text PRIMARY KEY NOT NULL,
	"userId" uuid,
	"role" "user_role" NOT NULL,
	"expireDateTime" timestamp with time zone NOT NULL,
	CONSTRAINT "user_sessions_sessionId_unique" UNIQUE("sessionId")
);
--> statement-breakpoint
CREATE TABLE "solo_games" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userHostId" uuid NOT NULL,
	"currentRound" integer NOT NULL,
	"totalRounds" integer NOT NULL,
	"timePerTurn" integer NOT NULL,
	"maxAttemptsPerRound" integer NOT NULL,
	"words" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_friends" (
	"userId" uuid,
	"friendId" uuid,
	CONSTRAINT "user_friends_userId_friendId_pk" PRIMARY KEY("userId","friendId")
);
--> statement-breakpoint
CREATE TABLE "user_solo_games" (
	"userId" uuid NOT NULL,
	"soloGameId" uuid NOT NULL,
	CONSTRAINT "user_solo_games_userId_soloGameId_pk" PRIMARY KEY("userId","soloGameId")
);
--> statement-breakpoint
CREATE TABLE "user_stats" (
	"id" uuid PRIMARY KEY NOT NULL,
	"soloGamesPlayed" integer DEFAULT 0 NOT NULL,
	"multiplayerGamesPlayed" integer DEFAULT 0 NOT NULL,
	"wordOfTheDaysPlayed" integer DEFAULT 0 NOT NULL,
	"wordOfTheDayWins" integer DEFAULT 0 NOT NULL,
	"lastGamePlayed" timestamp,
	"badges" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "word_lists" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"allWordsAreEqualLength" boolean NOT NULL,
	"totalWords" integer NOT NULL,
	"language" text NOT NULL,
	"imageUrl" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "words" (
	"listId" uuid,
	"word" text NOT NULL,
	CONSTRAINT "words_listId_word_pk" PRIMARY KEY("listId","word")
);
--> statement-breakpoint
CREATE TABLE "global_stats" (
	"id" integer PRIMARY KEY NOT NULL,
	"totalGamesPlayed" integer DEFAULT 1 NOT NULL,
	"totalUsers" integer DEFAULT 1 NOT NULL,
	"totalWordsGuessed" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solo_games" ADD CONSTRAINT "solo_games_userHostId_users_id_fk" FOREIGN KEY ("userHostId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friendId_users_id_fk" FOREIGN KEY ("friendId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_solo_games" ADD CONSTRAINT "user_solo_games_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_solo_games" ADD CONSTRAINT "user_solo_games_soloGameId_solo_games_id_fk" FOREIGN KEY ("soloGameId") REFERENCES "public"."solo_games"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "words" ADD CONSTRAINT "words_listId_word_lists_id_fk" FOREIGN KEY ("listId") REFERENCES "public"."word_lists"("id") ON DELETE cascade ON UPDATE no action;