"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";
import { useState } from "react";

const maxAttemptOptions = ["Public", "Private", "Friends-Only"];

export default function GameVisibilitySettings({}) {
    const [maxAttempts, setMaxAttempts] = useState(6);

    return (
        <PickItemGrid 
            title="Max Attempts"
            valueIndicator="guesses"
            items={maxAttemptOptions} 
            value={maxAttempts}
            onChange={(value) => setMaxAttempts(value) }>            
        </PickItemGrid>
    )
}