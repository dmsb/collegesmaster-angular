class ChallengeImpl extends ModelImpl implements Challenge {
    title: string;
    discipline: Discipline;
    submmited: boolean;
    questions: any[];
    type: ChallengeType
}