"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";

const wordLengthOptions = [3, 4, 5, 6, 7];

interface Props {
    name: string;
}

export default function WordLengthSettings({ name }: Props) {
    return (
        <PickItemGrid 
            title="Word Length"
            valueIndicator="letters"
            items={wordLengthOptions}
            name={name}>       
        </PickItemGrid>
    )
}