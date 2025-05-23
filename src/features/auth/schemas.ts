import { userRoles } from "@/drizzle/schema";
import { z } from "zod";

export const signInSchema = z.object({
    username: z.string().min(1, "Required"),
    password: z.string().min(1, "Required")
});

export const signUpSchema = z.object({
    email: z.string().min(1, "Required"),
    username: z.string().min(1, "Required"),
    password: z.string().min(1, "Required"),    
});

export const sessionSchema = z.object({
    sessionId: z.string(),
    userId: z.string().uuid(),
    role: z.enum(userRoles)
});