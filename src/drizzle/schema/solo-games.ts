import { pgTable, uuid, integer, jsonb, text } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export type SoloGameWord = {
    round: number;
    word: string;
}

export const SoloGamesTable = pgTable("solo_games", {
    id,
    userHostId: uuid().references(() => UsersTable.id),
    currentRound: integer(),
    totalRounds: integer(),
    timePerTurn: integer(),
    maxAttemptsPerRound: integer(),
    words: jsonb('words').$type<SoloGameWord[]>().notNull().default([]),
    createdAt
});

export const SoloGameRelationships = relations(SoloGamesTable, ({ many }) => ({
    userSoloGames: many(UsersTable)
}));