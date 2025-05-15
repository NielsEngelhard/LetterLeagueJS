interface UserModel {
    id: string;
    username: string;
    email: string;
    level: number;
    joinDate: string;    
    stats: UserStats;
    colorHex: string;
}

interface UserStats {
    soloGamesPlayed: number;
    multiplayerGamesPlayed: number;
    wordOfTheDaysPlayed: number;
    wordOfTheDayWins: number;
    lastGamePlayed: string;
    badges: string[];
}