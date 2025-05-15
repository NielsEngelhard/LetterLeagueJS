interface UserModel {
    id: string;
    username: string;
    name: string;
    email: string;
    level: 24;
    rank: string;
    joinDate: string;
    badges: string[];
    stats: UserStats;
    colorHex: string;
}

interface UserStats {
    gamesPlayed: number;
    winRate: string;
    longestStreak: number;
    favoriteWord: string;
}