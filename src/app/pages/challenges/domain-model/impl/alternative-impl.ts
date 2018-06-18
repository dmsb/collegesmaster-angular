import { ModelImpl } from "../../../../domain-model/impl/model-impl";
import { Question } from "../question";
import { Alternative } from "../alternative";
import { Letter } from "../enums/letter";

export class AlternativeImpl extends ModelImpl implements Alternative {
    description: string;
    question: Question;
    letter: Letter;   
}