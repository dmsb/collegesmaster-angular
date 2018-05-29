import { ModelImpl } from "../../../../domain-model/impl/model-impl";

export class AlternativeImpl extends ModelImpl implements Alternative {
    description: string;
    question: Question;
    letter: Letter;   
}