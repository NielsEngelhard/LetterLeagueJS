import { hashPassword } from "@/features/auth/password-hasher";
import { GlobalStatsTable, UsersTable } from "../schema";
import { drizzle } from "drizzle-orm/node-postgres";

async function seed() {
    console.log('🌱 Seeding database...');

    const db = drizzle("postgresql://postgres:kaas@localhost:5432/letterleague");

    try {

      // UsersTable seeds
      const salt = 'ThisPasswordIsNotOnProductionHaha(IHope)';
      const userPassword = await hashPassword('kaas', salt);

      var user = {
          username: 'NielsKaas',
          email: 'niels.engelhard@turingsolutions.nl',
          hashedPassword: userPassword,
          salt: salt ,
          role: 'admin',
          level: 0,
          colorHex: "#e73549",
      }

      await db.insert(UsersTable).values({
          username: 'NielsKaas',
          email: 'niels.engelhard@turingsolutions.nl',
          hashedPassword: userPassword,
          salt: salt ,
          role: 'admin',
          levels: 0,
          colorHex: "#e73549",
      });

      // // GlobalStats Seeds
      await db.insert(GlobalStatsTable).values([
        { id: 1, totalUsers: 1, totalGamesPlayed: 2, totalWordsGuessed: 3  },
      ]);


      
      console.log('✅ Seed completed successfully');
    } catch (error) {
      console.error('❌ Seed failed:', error);
    }
  }
  
seed();