import { ValidatedLetter } from "../words/letter-models";

export interface InGamePlayer {
  id: string;
  name: string;
  score: number;
  isCurrentTurn: boolean;
  isCurrentPlayer: boolean;
}

export interface PlayerGuess {
    playerId: string;
    round: number;
    guess: ValidatedLetter[];
}