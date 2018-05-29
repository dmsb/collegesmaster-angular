import { ModelImpl } from "../../impl/model-impl";

export class DisciplineImpl extends ModelImpl implements Discipline {
    name: string;
    course: Course;
}