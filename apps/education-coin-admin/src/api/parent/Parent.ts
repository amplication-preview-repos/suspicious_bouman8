import { Child } from "../child/Child";
import { Contract } from "../contract/Contract";
import { Quiz } from "../quiz/Quiz";

export type Parent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  password: string | null;
  children?: Array<Child>;
  contracts?: Array<Contract>;
  quizzes?: Array<Quiz>;
};
