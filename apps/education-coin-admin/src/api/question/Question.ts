import { Quiz } from "../quiz/Quiz";
import { Answer } from "../answer/Answer";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  quiz?: Quiz | null;
  answers?: Array<Answer>;
};
