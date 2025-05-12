import { pgTable, integer } from 'drizzle-orm/pg-core';

export const GlobalStatsTable = pgTable('global_stats', {
    id: integer('id').primaryKey().notNull(),
    totalGamesPlayed: integer().notNull().default(1),
    totalUsers: integer().notNull().default(1),
    totalWordsGuessed: integer().notNull().default(1)
})