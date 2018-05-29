import { ModelImpl } from "../../impl/model-impl";

export class CourseImpl extends ModelImpl implements Course {
    name: string;
    institute: Institute
    disciplines: Discipline[];
}