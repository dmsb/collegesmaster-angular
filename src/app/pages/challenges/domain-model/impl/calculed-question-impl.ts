import { QuestionImpl } from "./question-impl";

export class CalculedQuestionImpl extends QuestionImpl implements CalculedQuestion {
    rightAnswer: number;
}