import { pgTable, uuid, numeric } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export const SinglePlayerGamesTable = pgTable("singleplayer_games", {
    id,
    userHostId: uuid().references(() => UsersTable.id),
    currentRound: numeric(),
    totalRounds: numeric(),
    createdAt
});

export const SinglePlayerGameRelationships = relations(SinglePlayerGamesTable, ({ many }) => ({
    userSinglePlayerGames: many(UsersTable)
}));