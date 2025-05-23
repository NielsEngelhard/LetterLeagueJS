"use server"

import { z } from "zod";
import { signInSchema, signUpSchema } from "./schemas";
import { redirect } from "next/navigation";
import { db } from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { hashPassword, generateSalt, comparePasswords } from "./password-hasher";
import { generateRandomUsername } from "@/lib/username-generator";
import { createUserSession, removeUserFromSession } from "./session";
import { cookies } from "next/headers";

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
    const { success, data } = signInSchema.safeParse(unsafeData);
    if (!success) return "Login failed";
    
    const user = await findUserByEmailOrUsername(data.username);

    if (user == null) return "Username/password combination does not match";


    const isCorrectPassword = await comparePasswords({
        hashedPassword: user.hashedPassword,
        salt: user.salt,
        password: data.password
    });

    if (!isCorrectPassword) return "Username/password combination does not match";

    await createUserSession({
        userId: user.id,
        role: user.role,
        sessionId: ""
    }, await cookies());

    redirect("/play");
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>): Promise<string> {
    const { success, data } = signUpSchema.safeParse(unsafeData);
    if (!success) return "Login failed";

    const existingUserByEmail = await db.select()
        .from(UsersTable)
        .where(eq(UsersTable.email, data.email))
        .then(rows => rows[0]);

    if (existingUserByEmail) return "Email address is already in use";

    // Check if username is already in use
    const existingUserByUsername = await db.select()
        .from(UsersTable)
        .where(eq(UsersTable.name, data.username))
        .then(rows => rows[0]);

    if (existingUserByUsername) return "Username is already taken";
    
    try {
        const salt = generateSalt();
        const hashedPassword = await hashPassword(data.password, salt);
    
        const user = await createUser(data.email, hashedPassword, salt);        
        if (user == null) return "Unable to create account"; 

        await createUserSession({
            sessionId: "",
            userId: user.id,
            role: "user"
        }, await cookies());
    } catch (ex) {
        console.log(ex);
        return "Something went wrong while creating your account";
    }

    redirect("/play");
}

export async function logOut() {
    removeUserFromSession(await cookies());
    
    redirect("/");
}

async function createUser(email: string, hashedPassword: string, salt: string) {
    const user = await db
        .insert(UsersTable)
        .values({
            name: generateRandomUsername(),
            email: email,
            hashedPassword: hashedPassword,
            salt: salt,           
            role: "user" 
        })
        .returning({ id: UsersTable.id });

        return user[0];
};

async function findUserByEmailOrUsername(usernameOrEmail: string) {
    const usernameIsEmail = usernameOrEmail.includes("@");
  
    const users = usernameIsEmail
      ? await db.select().from(UsersTable).where(eq(UsersTable.email, usernameOrEmail))
      : await db.select().from(UsersTable).where(eq(UsersTable.name, usernameOrEmail));
  
    return users[0] ?? null;
  }