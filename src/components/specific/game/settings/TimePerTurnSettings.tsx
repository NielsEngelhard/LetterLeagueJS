"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";
import { Clock } from "lucide-react";

const timePerTurnOptions = [10, 20, 30, 40];

interface Props {
    name: string;
}

export default function TimePerTurnSettings({ name }: Props) {
    return (
        <PickItemGrid 
            name={name}
            title="Time per Turn"
            valueIndicator="seconds"
            valuePostfix="s"
            Icon={Clock}
            items={timePerTurnOptions}>          
        </PickItemGrid>
    )
}