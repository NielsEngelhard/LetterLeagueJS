CREATE TABLE "global_stats" (
	"id" integer PRIMARY KEY NOT NULL,
	"totalGamesPlayed" integer DEFAULT 1 NOT NULL,
	"totalUsers" integer DEFAULT 1 NOT NULL,
	"totalWordsGuessed" integer DEFAULT 1 NOT NULL
);
