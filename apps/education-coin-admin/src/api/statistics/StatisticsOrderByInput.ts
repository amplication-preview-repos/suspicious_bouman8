import { SortOrder } from "../../util/SortOrder";

export type StatisticsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  correctAnswers?: SortOrder;
  wrongAnswers?: SortOrder;
  totalCoins?: SortOrder;
  childId?: SortOrder;
};
