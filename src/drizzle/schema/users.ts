import { numeric, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { relations } from "drizzle-orm";
import { SinglePlayerGamesTable } from "./single-player-game";
import { UserSessionTable } from "./user-session";
import { UserStatsTable } from "./user-stats";
import { userRoleEnum } from "./enum/user-role";

export const UsersTable = pgTable("users", {
    id,
    username: text().notNull(),    
    email: text().notNull(),
    hashedPassword: text().notNull(),
    salt: text().notNull(),
    role: userRoleEnum().notNull(),
    level: numeric().notNull().default(0),
    colorHex: text(),
    createdAt
});

export const UserRelationships = relations(UsersTable, ({ many, one }) => ({
    userSinglePlayerGames: many(SinglePlayerGamesTable),

    session: one(UserSessionTable, {
        fields: [UsersTable.id],
        references: [UserSessionTable.userId],
    }),    

    userStats: one(UserStatsTable, {
        fields: [UsersTable.id],
        references: [UserStatsTable.id],
    }),        
}));
