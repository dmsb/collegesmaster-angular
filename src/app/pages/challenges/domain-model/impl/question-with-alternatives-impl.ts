import { QuestionImpl } from "./question-impl";

export class QuestionWithAlternativesImpl extends QuestionImpl implements QuestionWithAlternatives {
    alternatives: Alternative[];
}