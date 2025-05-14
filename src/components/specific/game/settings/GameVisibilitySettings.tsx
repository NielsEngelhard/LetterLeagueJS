"use client";

import MutedPickItemGrid from "@/components/shared/MutedPickItemGrid";
import PickItemGrid from "@/components/shared/PickItemGrid";
import Card from "@/components/ui/card/card";
import { Globe, HeartHandshakeIcon, Lock } from "lucide-react";
import { useState } from "react";

const maxAttemptOptions = ["Public", "Private", "Friends-Only"];

const maxAttemptItems = [
    {
        label: "Public",
        value: "public",
        Icon: Globe,
    },
    {
        label: "Private",
        value: "private",
        Icon: Lock,
    },    
    {
        label: "Friends-Only",
        value: "friendsonly",
        Icon: HeartHandshakeIcon,
    },      
];

export default function GameVisibilitySettings({}) {
    const [visibility, setVisibility] = useState(maxAttemptItems[2].value);

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Game Visibility</h2>
            </div>

            <MutedPickItemGrid
                value={visibility}
                onChange={setVisibility}
                items={maxAttemptItems}>
            </MutedPickItemGrid>                         
        </div>    
    )
}