import { db } from "@/drizzle/db";
import { GlobalStatsTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export default async function getGlobalStats() {
    const globalStats = await db.select()
        .from(GlobalStatsTable)
        .where(eq(GlobalStatsTable.id, 1))
        .limit(1);

    return globalStats[0];
}