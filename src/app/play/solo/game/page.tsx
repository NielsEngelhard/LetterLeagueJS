"use client"

import LoadingPage from "@/components/layout/LoadingPage";
import PlayGameBase from "@/features/game/components/PlayGameBase";
import { GetSoloGame } from "@/features/game/solo/actions";
import { SoloGame } from "@/features/game/solo/solo-game-schemas";
import { serverCall } from "@/lib/server-call-helper";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function SoloGamePage() {
    const [game, setGame] = useState<SoloGame>();

    const searchParams = useSearchParams();
    const gameId = searchParams.get("id");

    const fetchGame = async () => {
        try {
            var response = await GetSoloGame(gameId);
            setGame(response);                
        } catch {

        }
    }

    useEffect(() => {
        if (!gameId) return;
        fetchGame();
    }, [gameId]);

    return (
        <LoadingPage isLoading={game == undefined} >
            <PlayGameBase
                totalRounds={10}
                currentWordLength={6}
                totalTriesPerRound={5}                
                players={[ { id: "000", name: "lol", isCurrentTurn: true, score: 20, isCurrentPlayer: true },
                    { id: "0001", name: "lols", isCurrentTurn: false, score: 22, isCurrentPlayer: false }
                 ]}
            />
        </LoadingPage>
    )
}