import { ModelImpl } from "../../../../domain-model/impl/model-impl";

export class QuestionImpl extends ModelImpl implements Question {
    questionWording: string;
    challenge: Challenge;
    type: QuestionType;
    pontuation: number;
}