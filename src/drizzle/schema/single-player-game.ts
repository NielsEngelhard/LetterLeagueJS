import { pgTable, uuid, integer } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export const SinglePlayerGamesTable = pgTable("singleplayer_games", {
    id,
    userHostId: uuid().references(() => UsersTable.id),
    currentRound: integer(),
    totalRounds: integer(),
    createdAt
});

export const SinglePlayerGameRelationships = relations(SinglePlayerGamesTable, ({ many }) => ({
    userSinglePlayerGames: many(UsersTable)
}));