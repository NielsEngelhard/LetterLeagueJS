"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";

const maxAttemptOptions = [4, 5, 6, 7];

interface Props {
    name: string;
}

export default function MaxAttemptSettings({ name }: Props) {
    return (
        <PickItemGrid 
            title="Max Attempts"
            valueIndicator="guesses"
            items={maxAttemptOptions} 
            name={name}>            
        </PickItemGrid>
    )
}