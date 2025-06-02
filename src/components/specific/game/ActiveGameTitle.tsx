import { GameMode } from "@/lib/game-constants";
import { ReactNode } from "react";

interface Props {
    gameMode: GameMode;
}

const gameModeContents: Record<GameMode, ReactNode> = {
    [GameMode.SoloCustom]: <>Custom Solo Game</>,
    [GameMode.SoloWordOfTheDay]: <>Word of the Day</>,
    [GameMode.SoloRandom]: <>Random Solo Game</>,
    [GameMode.MultiplayerCustom]: <>Multiplayer Game</>,
};

export default function ActiveGameTitle({ gameMode }: Props) {
    const content = gameModeContents[gameMode];

    return content ? (
        <h1 className="font-special text-3xl md:text-4xl mb-2">{content}</h1>
    ) : (
        <div>Game</div>
    );
}
