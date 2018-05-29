import { ModelImpl } from "../../impl/model-impl";

export class InstituteImpl extends ModelImpl implements Institute {
    name: string;
    courses: Course[];
}