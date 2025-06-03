import { GameMode } from "@/lib/game-constants";
import { z } from "zod";
import { RoundGuess, WordHint } from "../game-models";

export const createCustomSoloGameSchema = z.object({
    wordLength: z.number().min(3, "Required"),
    password: z.string().min(1, "Required")
});

export interface SoloGame {
    id: string;
    currentRound: number;
    maxAttempts: number;
    totalRounds: number;
    gameMode: GameMode;
    createdAt: Date;
    guesses: RoundGuess[];
    hint: WordHint;
    timePerTurn?: number;
}