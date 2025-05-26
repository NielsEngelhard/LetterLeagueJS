interface UserAndSessionModel {
    user: UserModel;
    session: UserSessionModel;
}

interface UserModel {
    id: string;
    username: string;
    email: string;
    level: number;
    colorHex?: string | null;
    stats?: UserStats;
    joinDate?: Date;
}

interface UserStats {
    soloGamesPlayed: number;
    multiplayerGamesPlayed: number;
    wordOfTheDaysPlayed: number;
    wordOfTheDayWins: number;
    lastGamePlayed: string;
    badges: string[];
}

interface UserSessionModel {
    sessionId: string;
}