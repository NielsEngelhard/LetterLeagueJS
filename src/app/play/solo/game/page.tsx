"use client"

import { useSearchParams } from "next/navigation"

export default async function SoloGamePage() {
    const searchParams = useSearchParams();
    const gameId = searchParams.get("id");

    return (
        <div>
            lol {gameId}
        </div>
    )
}