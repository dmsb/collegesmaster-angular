import { ModelImpl } from "../../../../domain-model/impl/model-impl";
import { Challenge } from "../challenge";
import { ChallengeType } from "../enums/challenge-type";

export class ChallengeImpl extends ModelImpl implements Challenge {
    title: string;
    discipline: Discipline;
    submmited: boolean;
    questions: any[];
    type: ChallengeType
}