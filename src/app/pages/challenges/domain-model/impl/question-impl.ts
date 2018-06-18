import { ModelImpl } from "../../../../domain-model/impl/model-impl";
import { Challenge } from "../challenge";
import { Question } from "../question";

export class QuestionImpl extends ModelImpl implements Question {
    questionWording: string;
    challenge: Challenge;
    pontuation: number;
}