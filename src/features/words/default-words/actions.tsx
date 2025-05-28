"use server";

// OPT: host on a blob storage or something eventually for PROD scenarios.
// For now it are txt files locally
export async function PickDefaultWords({amount, wordLength, language}: {amount: number, wordLength: number, language: string}) {
    // Build location/url
    const absolutePath = `/word-lists/${language}/${language}-${wordLength}-words.txt`;
    const url = `${process.env.SECRET_WORD_LISTS_BASE_ADDRESS}${absolutePath}`;

    // Fetch list
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch file from URL: ${url}`);

    // Filter and pick words
    const text = await response.text();
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");
    if (lines.length < amount) throw new Error(`Not enough lines in the file to pick ${amount}.`); 

    // Pick random words
    const randomLines = getRandomElements(lines, amount);
    return randomLines;    
}

function getRandomElements<T>(array: T[], count: number): T[] {
    const result: T[] = [];
    const usedIndices = new Set<number>();

    while (result.length < count && usedIndices.size < array.length) {
        const index = Math.floor(Math.random() * array.length);
        if (!usedIndices.has(index)) {
            usedIndices.add(index);
            result.push(array[index]);
        }
    }

    return result;
}