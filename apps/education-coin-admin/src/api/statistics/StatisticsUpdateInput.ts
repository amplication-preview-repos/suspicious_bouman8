import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";

export type StatisticsUpdateInput = {
  correctAnswers?: number | null;
  wrongAnswers?: number | null;
  totalCoins?: number | null;
  child?: ChildWhereUniqueInput | null;
};
