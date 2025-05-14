import { hashPassword } from "@/features/auth/password-hasher";
import { db } from "../db";
import { GlobalStatsTable, UsersTable } from "../schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";

async function seed() {
    console.log('🌱 Seeding database...');

      const db = drizzle("poepstoep");

      var lol = await db.select().from(GlobalStatsTable).where(eq(GlobalStatsTable.id, 1));
      console.log(lol);

    try {



      // UsersTable seeds
      // const salt = 'ThisPasswordIsNotOnProductionHaha(IHope)';
      // const userPassword = hashPassword('kaas', salt);
      // await db.insert(UsersTable).values([
      //   { id: 1, name: 'NielsKaas', email: 'niels.engelhard@turingsolutions.nl', password: userPassword, salt: salt , role: 'admin' },
      // ]);

      // // GlobalStats Seeds
      // await db.insert(GlobalStatsTable).values([
      //   { id: 1, totalUsers: 1, totalGamesPlayed: 2, totalWordsGuessed: 3  },
      // ]);


      
      console.log('✅ Seed completed successfully');
    } catch (error) {
      console.error('❌ Seed failed:', error);
    }
  }
  
seed().then(() => {
  console.log("test");
  });