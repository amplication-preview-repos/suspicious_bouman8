import { Child } from "../child/Child";

export type Statistics = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  correctAnswers: number | null;
  wrongAnswers: number | null;
  totalCoins: number | null;
  child?: Child | null;
};
