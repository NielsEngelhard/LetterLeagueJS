import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { SinglePlayerGamesTable } from "./single-player-game";
import { relations } from "drizzle-orm";

export const UserSinglePlayerGamesTable = pgTable("user_singleplayergames", {
    userId: uuid()
        .notNull()
        .references(() => UsersTable.id, { onDelete: "cascade"}),
    singlePlayerGameId: uuid()
        .notNull()
        .references(() => SinglePlayerGamesTable.id, { onDelete: "cascade"})
},
t => [primaryKey({ columns: [t.userId, t.singlePlayerGameId] })]);

export const UserSinglePlayerGamesRelationships = relations(
    UserSinglePlayerGamesTable,
    ({ one }) => ({
        user: one(UsersTable, {
            fields: [UserSinglePlayerGamesTable.userId],
            references: [UsersTable.id]
        }),
        singlePlayerGame: one(SinglePlayerGamesTable, {
            fields: [UserSinglePlayerGamesTable.singlePlayerGameId],
            references: [SinglePlayerGamesTable.id]
        })        
    })
);