"use client";

import AdvancedSelectCardGrid, { AdvancedSelectOption } from "@/components/form/AdvancedSelectCardGrid";
import { GameVisibility } from "@/lib/game-constants";
import { Globe, HeartHandshakeIcon, Lock } from "lucide-react";

const gameVisibilityOptions: AdvancedSelectOption[] = [
    {
        label: "Public",
        value: GameVisibility.Public,
        Icon: Globe,
    },
    {
        label: "Private",
        value: GameVisibility.Private,
        Icon: Lock,
    },    
    {
        label: "Friends-Only",
        value: GameVisibility.FriendsOnly,
        Icon: HeartHandshakeIcon,
    },      
];

interface Props {
    name: string;
}

export default function GameVisibilitySettings({ name }: Props) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Game Visibility</h2>
            </div>
        
            <AdvancedSelectCardGrid name="visibility" options={gameVisibilityOptions}>

            </AdvancedSelectCardGrid>
            {/* <MutedPickItemGrid
                value={visibility}
                onChange={setVisibility}
                items={maxAttemptItems}>
            </MutedPickItemGrid>                          */}
        </div>    
    )
}