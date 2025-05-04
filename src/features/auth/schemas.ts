import { z } from "zod";

export const signInSchema = z.object({
    username: z.string().min(4, "Required"),
    password: z.string().min(5, "Required")
});

export const signUpSchema = z.object({
    email: z.string().min(1, "Required"),
    username: z.string().min(6, "Required"),
    password: z.string().min(6, "Required"),    
});