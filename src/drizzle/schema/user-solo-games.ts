import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { SoloGamesTable } from "./solo-games";
import { relations } from "drizzle-orm";

export const UserSinglePlayerGamesTable = pgTable("user_singleplayergames", {
    userId: uuid()
        .notNull()
        .references(() => UsersTable.id, { onDelete: "cascade"}),
    soloGameId: uuid()
        .notNull()
        .references(() => SoloGamesTable.id, { onDelete: "cascade"})
},
t => [primaryKey({ columns: [t.userId, t.soloGameId] })]);

export const UserSinglePlayerGamesRelationships = relations(
    UserSinglePlayerGamesTable,
    ({ one }) => ({
        user: one(UsersTable, {
            fields: [UserSinglePlayerGamesTable.userId],
            references: [UsersTable.id]
        }),
        soloGame: one(SoloGamesTable, {
            fields: [UserSinglePlayerGamesTable.soloGameId],
            references: [SoloGamesTable.id]
        })        
    })
);