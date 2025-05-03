import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(4, "Required"),
    password: z.string().min(5, "Required")
})