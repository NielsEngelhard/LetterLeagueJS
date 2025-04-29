import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";

export const UserStats = pgTable("user_stats", {
    id: uuid().primaryKey().references(() => UsersTable.id, { onDelete: "cascade" }),
    name: text().notNull(),
    email: text().notNull(),
    lastGamePlayed: timestamp(),
  });