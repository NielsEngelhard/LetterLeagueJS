import { pgTable, text, boolean, numeric } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helpers";

export const WordListsTable = pgTable("word_lists", {
    id,
    name: text().notNull(),
    allWordsAreEqualLength: boolean().notNull(),
    totalWords: numeric().notNull(),
    language: text().notNull(),      // e.g. "en", "nl"
    imageUrl: text(),
    createdAt
})