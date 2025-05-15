import { integer, json, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export const UserStatsTable = pgTable("user_stats", {
    id: uuid().primaryKey().references(() => UsersTable.id, { onDelete: "cascade" }),
    soloGamesPlayed: integer().notNull().default(0),
    multiplayerGamesPlayed: integer().notNull().default(0),
    wordOfTheDaysPlayed: integer().notNull().default(0),
    wordOfTheDayWins: integer().notNull().default(0),    
    lastGamePlayed: timestamp(),
    badges: json<string[]>().notNull().default([]),
  });``

export const UserStatsRelations = relations(UserStatsTable, ({ one }) => ({
    user: one(UsersTable, {
        fields: [UserStatsTable.id],
        references: [UsersTable.id],
    }),
}));