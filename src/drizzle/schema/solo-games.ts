import { pgTable, uuid, integer, jsonb } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export type SoloGameWord = {
    position: number;
    word: string;
}

export const SoloGamesTable = pgTable("singleplayer_games", {
    id,
    userHostId: uuid().references(() => UsersTable.id),
    currentRound: integer(),
    totalRounds: integer(),
    timePerTurn: integer(),
    words: jsonb('words').$type<SoloGameWord[]>().notNull().default([]),
    createdAt
});

export const SinglePlayerGameRelationships = relations(SoloGamesTable, ({ many }) => ({
    userSinglePlayerGames: many(UsersTable)
}));