import { QuestionImpl } from "./question-impl";
import { Question } from "../question";
import { QuestionWithAlternatives } from "../question-with-alternatives";
import { Alternative } from "../alternative";

export class QuestionWithAlternativesImpl extends QuestionImpl implements QuestionWithAlternatives {
    
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

    alternatives: Alternative[];
}