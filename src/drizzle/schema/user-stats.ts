import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { relations } from "drizzle-orm";

export const UserStatsTable = pgTable("user_stats", {
    id: uuid().primaryKey().references(() => UsersTable.id, { onDelete: "cascade" }),
    soloGamesPlayed: numeric().notNull(),
    multiplayerGamesPlayed: numeric().notNull(),
    wordOfTheDaysPlayed: numeric().notNull(),
    wordOfTheDayWins: numeric().notNull(),    
    lastGamePlayed: timestamp(),
  });

export const UserStatsRelations = relations(UserStatsTable, ({ one }) => ({
    user: one(UsersTable, {
        fields: [UserStatsTable.id],
        references: [UsersTable.id],
    }),
}));