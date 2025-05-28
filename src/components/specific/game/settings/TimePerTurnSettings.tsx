"use client";

import SelectCardGrid from "@/components/form/SelectCardGrid";
import { Clock } from "lucide-react";

const timePerTurnOptions = [10, 20, 30, 40];

interface Props {
    name: string;
}

const mappedOptions = timePerTurnOptions.map(o => {
    return {
        value: o,
        label: o
    }
});

export default function TimePerTurnSettings({ name }: Props) {
    return (
        <SelectCardGrid 
            name={name}
            title="Time per Turn"
            valueIndicator="seconds"
            valuePostfix="s"
            Icon={Clock}
            options={mappedOptions}>          
        </SelectCardGrid>
    )
}