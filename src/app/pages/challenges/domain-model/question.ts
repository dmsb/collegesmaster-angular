interface Question extends Model {
    questionWording: string;
    challenge: Challenge;
    type: QuestionType;
    pontuation: number;
}