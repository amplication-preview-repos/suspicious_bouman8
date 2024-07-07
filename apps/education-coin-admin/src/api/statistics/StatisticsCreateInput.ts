import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";

export type StatisticsCreateInput = {
  correctAnswers?: number | null;
  wrongAnswers?: number | null;
  totalCoins?: number | null;
  child?: ChildWhereUniqueInput | null;
};
