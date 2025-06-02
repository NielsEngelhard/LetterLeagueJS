"use server";

import { db } from "@/drizzle/db";
import { SoloGamesTable } from "@/drizzle/schema";
import { SoloGame } from "./solo-game-schemas";
import { eq } from "drizzle-orm";
import { GameMode } from "@/lib/game-constants";

export async function GetSoloGame(gameId: string | null): Promise<SoloGame> {
    if (!gameId) throw new Error("GameId not defined");
    
    var result = await db.select().from(SoloGamesTable).where(eq(SoloGamesTable.id, gameId));
    var game = result[0];

    var currentRound = game.currentRound;
    var currentWord = game.words.find(w => w.round == currentRound)?.word;

    console.log("yolo");

    if (!currentWord) throw new Error(`Could not find the current word for round ${game.currentRound}/${game.totalRounds}`);

    return {
        id: game.id,
        currentRound: game.currentRound,
        createdAt: game.createdAt,
        gameMode: GameMode.SoloCustom,
        maxAttempts: game.maxAttemptsPerRound,
        timePerTurn: game.timePerTurn,
        totalRounds: game.totalRounds,
        guesses: [],
        hint: {
            wordLength: currentWord.length,
            startingLetter: currentWord.charAt(0)
        }
    }
}

// export async function SubmitGuess(gameId: string, guess: string): Promise<RoundGuess> {
//     // GET Current word

//     // 
// }