"use client";

import SelectCardGrid from "@/components/form/SelectCardGrid";

const wordLengthOptions = [3, 4, 5, 6, 7];

interface Props {
    name: string;
}

const mappedOptions = wordLengthOptions.map(o => {
    return {
        value: o,
        label: o
    }
});

export default function WordLengthSettings({ name }: Props) {
    return (
        <SelectCardGrid 
            title="Word Length"
            valueIndicator="letters"
            options={mappedOptions}
            name={name}>       
        </SelectCardGrid>
    )
}