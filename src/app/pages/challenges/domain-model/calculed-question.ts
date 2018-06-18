import { Question } from "./question";

export interface CalculedQuestion extends Question {
    rightAnswer: number;
}