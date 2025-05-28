import { GameVisibility } from "@/lib/game-constants";
import { z } from "zod";

export const MIN_WORD_LENGTH = 3;
export const MAX_WORD_LENGTH = 7;

export const MIN_TOTAL_ATTEMPTS = 4;
export const MAX_TOTAL_ATTEMPTS = 10;

export const MIN_TURN_TIME = 10;
export const MAX_TURN_TIME = 40;

export const createGameSchema = z.object({
    wordLength: z.number()
        .min(MIN_WORD_LENGTH, `Min word length is ${MIN_WORD_LENGTH}`)
        .max(MAX_WORD_LENGTH, `Max word length is ${MAX_WORD_LENGTH}`),
    maxAttempts: z.number()
        .min(MIN_TOTAL_ATTEMPTS, `Min total attempts is ${MIN_TOTAL_ATTEMPTS}`)
        .max(MAX_TOTAL_ATTEMPTS, `Max total attempts is ${MAX_TOTAL_ATTEMPTS}`),
    timePerTurn: z.number()
        .min(MIN_TURN_TIME, `Min turn time is ${MIN_TURN_TIME}s`)
        .max(MAX_TURN_TIME, `Max turn time is ${MAX_TURN_TIME}s`),
    visibility: z.nativeEnum(GameVisibility).nullable().optional()
});
export type CreateGameSchema = z.infer<typeof createGameSchema>;
