"use client";

import SelectCardGrid from "@/components/form/SelectCardGrid";

const maxAttemptOptions = [4, 5, 6, 7];

interface Props {
    name: string;
}

const mappedOptions = maxAttemptOptions.map(o => {
    return {
        value: o,
        label: o
    }
});

export default function MaxAttemptSettings({ name }: Props) {
    return (
        <SelectCardGrid 
            title="Max Attempts"
            valueIndicator="guesses"
            options={mappedOptions} 
            name={name}>            
        </SelectCardGrid>
    )
}