"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";
import { useState } from "react";

const maxAttemptOptions = [4, 5, 6, 7];

export default function MaxAttemptSettings({}) {
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