"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";
import { Clock } from "lucide-react";
import { useState } from "react";

const timePerTurnOptions = [10, 20, 30, 40];

export default function TimePerTurnSettings({}) {
    const [timePerTurn, setTimePerTurn] = useState(20);

    return (
        <PickItemGrid 
            title="Time per Turn"
            valueIndicator="seconds"
            valuePostfix="s"
            Icon={Clock}
            items={timePerTurnOptions} 
            value={timePerTurn}
            onChange={(value) => setTimePerTurn(value) }>            
        </PickItemGrid>
    )
}