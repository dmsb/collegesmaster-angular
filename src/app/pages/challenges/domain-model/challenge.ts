import { Question } from "./question";
import { ChallengeType } from "./enums/challenge-type";

export interface Challenge extends Model {
    title: string;
    type: ChallengeType;
    discipline: Discipline;
    submmited: boolean;
    questions: Question[];
}