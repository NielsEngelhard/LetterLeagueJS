"use client";

import GameSettings from "@/components/specific/game/GameSettings";
import { GameMode } from "@/lib/game-constants";

export default function SoloCustomGameSetup() {
    return (
        <GameSettings mode={GameMode.SoloCustom} title="Custom Game" ></GameSettings>
    )
}