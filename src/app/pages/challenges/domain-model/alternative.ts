import { Question } from "./question";
import { Letter } from "./enums/letter";

export interface Alternative extends Model {
    description: string;
    question: Question;
    letter: Letter;
}