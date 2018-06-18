import { Alternative } from "./alternative";
import { Question } from "./question";

export interface QuestionWithAlternatives extends Question {
    alternatives: Alternative[];
}