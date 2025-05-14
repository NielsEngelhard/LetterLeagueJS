"use client";

import PageTitle from "@/components/layout/pageTitle";
import GameSettings from "@/components/specific/game/settings/GameSettings";
import { GameMode } from "@/lib/game-constants";

export default function SoloCustomGameSetup() {
    return (
        <div>
            <PageTitle title="Custom Solo Game"></PageTitle>
            
            <GameSettings mode={GameMode.SoloCustom} ></GameSettings>
        </div>
    )
}