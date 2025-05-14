"use client";

import PickItemGrid from "@/components/shared/PickItemGrid";
import { useState } from "react";

const wordLengthOptions = [3, 4, 5, 6, 7];

export default function WordLengthSettings({}) {
    const [wordLength, setWordLength] = useState(5);

    return (
        <PickItemGrid 
            title="Word Length"
            valueIndicator="letters"
            items={wordLengthOptions} 
            value={wordLength}
            onChange={(value) => setWordLength(value) }>            
        </PickItemGrid>
    )
}