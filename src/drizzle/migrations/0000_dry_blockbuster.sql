CREATE TABLE "singleplayer_games" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userHostId" uuid,
	"currentRound" numeric,
	"totalRounds" numeric,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_friends" (
	"userId" uuid,
	"friendId" uuid,
	CONSTRAINT "user_friends_userId_friendId_pk" PRIMARY KEY("userId","friendId")
);
--> statement-breakpoint
CREATE TABLE "user_singleplayergames" (
	"userId" uuid NOT NULL,
	"singlePlayerGameId" uuid NOT NULL,
	CONSTRAINT "user_singleplayergames_userId_singlePlayerGameId_pk" PRIMARY KEY("userId","singlePlayerGameId")
);
--> statement-breakpoint
CREATE TABLE "user_stats" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"lastGamePlayed" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"imageUrl" text,
	"email" text NOT NULL,
	"hashedPassword" text,
	"salt" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "word_lists" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"allWordsAreEqualLength" boolean NOT NULL,
	"totalWords" numeric NOT NULL,
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
ALTER TABLE "singleplayer_games" ADD CONSTRAINT "singleplayer_games_userHostId_users_id_fk" FOREIGN KEY ("userHostId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friendId_users_id_fk" FOREIGN KEY ("friendId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_singleplayergames" ADD CONSTRAINT "user_singleplayergames_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_singleplayergames" ADD CONSTRAINT "user_singleplayergames_singlePlayerGameId_singleplayer_games_id_fk" FOREIGN KEY ("singlePlayerGameId") REFERENCES "public"."singleplayer_games"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "words" ADD CONSTRAINT "words_listId_word_lists_id_fk" FOREIGN KEY ("listId") REFERENCES "public"."word_lists"("id") ON DELETE cascade ON UPDATE no action;