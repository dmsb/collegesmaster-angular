class CourseImpl extends ModelImpl implements Course {
    name: string;
    institute: Institute
    disciplines: Discipline[];
}