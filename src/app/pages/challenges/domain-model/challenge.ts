interface Challenge extends Model {
    title: string;
    type: ChallengeType;
    discipline: Discipline;
    submmited: boolean;
    questions: Question[];
}