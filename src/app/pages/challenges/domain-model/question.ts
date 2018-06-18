import { Challenge } from "./challenge";

export interface Question extends Model {
    questionWording: string;
    challenge: Challenge;
    pontuation: number;
}