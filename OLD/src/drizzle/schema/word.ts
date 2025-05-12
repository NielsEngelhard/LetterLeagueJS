import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";
import { WordListsTable } from "./word-lists";


export const WordsTable = pgTable("words", {
  listId: uuid().references(() => WordListsTable.id, { onDelete: "cascade" }),
  word: text().notNull(),
}, t => [primaryKey({ columns: [t.listId, t.word] })]);