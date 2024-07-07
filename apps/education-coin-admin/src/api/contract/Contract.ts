import { Parent } from "../parent/Parent";
import { Child } from "../child/Child";
import { Quiz } from "../quiz/Quiz";

export type Contract = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  coinForCorrectAnswer: number | null;
  coinForWrongAnswer: number | null;
  timer: number | null;
  parent?: Parent | null;
  child?: Child | null;
  quizzes?: Array<Quiz>;
};
