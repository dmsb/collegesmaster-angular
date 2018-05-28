class QuestionImpl extends ModelImpl implements Question {
    description: string;
    challenge: Challenge;
    type: QuestionType;
    pontuation: number;
}