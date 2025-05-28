"use client";

import SelectCardGrid from "@/components/form/SelectCardGrid";

const totalRoundsOptions = [3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
    name: string;
}

const mappedOptions = totalRoundsOptions.map(o => {
    return {
        value: o,
        label: o
    }
});

export default function TotalRoundsSettings({ name }: Props) {
    return (
        <SelectCardGrid 
            title="Total rounds"
            valueIndicator="rounds"
            options={mappedOptions}
            name={name}>       
        </SelectCardGrid>
    )
}