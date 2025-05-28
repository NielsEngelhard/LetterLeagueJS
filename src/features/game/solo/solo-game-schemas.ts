import { z } from "zod";

export const createCustomSoloGameSchema = z.object({
    wordLength: z.number().min(3, "Required"),
    password: z.string().min(1, "Required")
});
