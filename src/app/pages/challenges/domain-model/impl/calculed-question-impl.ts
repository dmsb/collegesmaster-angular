import { QuestionImpl } from "./question-impl";
import { CalculedQuestion } from "../calculed-question";
import { Question } from "../question";

export class CalculedQuestionImpl extends QuestionImpl implements CalculedQuestion {
    constructor(private question: Question) {
        super();
        this.id = question.id;
        this.creationDateTime = question.creationDateTime;
        this.lastModificationDateTime = question.lastModificationDateTime;
        this.version = question.version;

        this.questionWording = question.questionWording;
        this.challenge = question.challenge;
        this.pontuation = question.pontuation;
    }
    rightAnswer: number;
}