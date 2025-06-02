export type LetterStatus = "correct" | "wrong-position" | "incorrect" | "idle" | "active";

export interface ValidatedLetter {
    position: number;
    letter: string;
    status: LetterStatus;
}
