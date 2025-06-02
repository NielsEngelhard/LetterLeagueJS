"use client"

import PlayGameBase from "@/features/game/components/PlayGameBase";
import { useSearchParams } from "next/navigation"

export default function SoloGamePage() {
    const searchParams = useSearchParams();
    const gameId = searchParams.get("id");

    return (
        <div>
            <PlayGameBase
                totalRounds={10}
                currentWordLength={6}
                totalTriesPerRound={5}                
                players={[ { id: "000", name: "lol", isCurrentTurn: true, score: 20, isCurrentPlayer: true },
                    { id: "0001", name: "lols", isCurrentTurn: false, score: 22, isCurrentPlayer: false }
                 ]}
            />
        </div>
    )
}