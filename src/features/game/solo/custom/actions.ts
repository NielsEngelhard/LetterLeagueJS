"use server";

import { SoloGamesTable, SoloGameWord } from "@/drizzle/schema";
import { createGameSchema, CreateGameSchema } from "../../general-schemas";
import { db } from "@/drizzle/db";
import { PickDefaultWords } from "@/features/words/default-words/actions";
import { getCurrentUser } from "@/features/auth/current-user";

export async function StartCustomSoloGame(input: CreateGameSchema): Promise<string> {
    const { success, data } = createGameSchema.safeParse(input);
    if (!success) throw new Error("Invalid input");

    var game = await createCustomSoloGameRecord(data);

    return game.id;
}

async function createCustomSoloGameRecord(data: CreateGameSchema): Promise<{ id: string }> {
    var words = await PickDefaultWords({
        amount: data.totalRounds,
        wordLength: data.wordLength,
        language: "nl" // TODO: support multi languages
    });

    var userId = (await getCurrentUser())?.user.id;
    if (!userId) throw new Error("User seems not logged in");

    var result = await db.insert(SoloGamesTable).values({
        currentRound: 1,
        timePerTurn: data.timePerTurn,
        totalRounds: data.totalRounds,
        maxAttemptsPerRound: data.maxAttempts,
        userHostId: userId,
        words: mapWordsToSoloGameWords(words)
    }).returning({
        id: SoloGamesTable.id
    });

    return result[0];
}

function mapWordsToSoloGameWords(words: string[]): SoloGameWord[] {
    var mappedWords: SoloGameWord[] = [];

    for (var i=0; i<words.length; i++) {
        mappedWords.push({
            round: i + 1,
            word: words[i]
        });
    }

    return mappedWords;
}