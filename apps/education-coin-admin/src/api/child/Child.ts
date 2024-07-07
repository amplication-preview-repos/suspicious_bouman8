import { Parent } from "../parent/Parent";
import { Contract } from "../contract/Contract";
import { Quiz } from "../quiz/Quiz";
import { Statistics } from "../statistics/Statistics";

export type Child = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  classField: string | null;
  schoolNumber: string | null;
  parent?: Parent | null;
  contracts?: Array<Contract>;
  quizzes?: Array<Quiz>;
  statisticsItems?: Array<Statistics>;
};
