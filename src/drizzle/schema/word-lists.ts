import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";

export const WordListsTable = pgTable("word_lists", {
    id,
    name: text().notNull(),
    allWordsAreEqualLength: boolean().notNull(),
    totalWords: integer().notNull(),
    language: text().notNull(), // e.g. "en", "nl"
    imageUrl: text(),
    createdAt
})