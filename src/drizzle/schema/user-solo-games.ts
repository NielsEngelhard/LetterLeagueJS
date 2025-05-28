import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";
import { SoloGamesTable } from "./solo-games";
import { relations } from "drizzle-orm";

export const UserSoloGamesTable = pgTable("user_solo_games", {
    userId: uuid()
        .notNull()
        .references(() => UsersTable.id, { onDelete: "cascade"}),
    soloGameId: uuid()
        .notNull()
        .references(() => SoloGamesTable.id, { onDelete: "cascade"})
},
t => [primaryKey({ columns: [t.userId, t.soloGameId] })]);

export const UserSoloGamesRelationships = relations(
    UserSoloGamesTable,
    ({ one }) => ({
        user: one(UsersTable, {
            fields: [UserSoloGamesTable.userId],
            references: [UsersTable.id]
        }),
        soloGame: one(SoloGamesTable, {
            fields: [UserSoloGamesTable.soloGameId],
            references: [SoloGamesTable.id]
        })        
    })
);