"use server";

import { SoloGamesTable } from "@/drizzle/schema";
import { createGameSchema, CreateGameSchema } from "../../general-schemas";
import { db } from "@/drizzle/db";

export async function StartCustomSoloGame(input: CreateGameSchema) {
    const { success, data } = createGameSchema.safeParse(input);
    if (!success) throw new Error("Invalid input");

    await createCustomSoloGameRecord(data);
}

async function createCustomSoloGameRecord(data: CreateGameSchema) {
    await db.insert(SoloGamesTable).values({

    });
}

async function deleteCurrentCustomSoloGameIfAny() {

}