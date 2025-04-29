import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";
import { relations } from "drizzle-orm";
import { SinglePlayerGamesTable } from "./single-player-game";

export const UsersTable = pgTable("users", {
    id,
    name: text().notNull(),
    imageUrl: text(),
    email: text().notNull(),
    hashedPassword: text(),
    salt: text(),
    createdAt
});

export const UserRelationships = relations(UsersTable, ({ many }) => ({
    userSinglePlayerGames: many(SinglePlayerGamesTable)
}));