import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  coinForCorrectAnswer?: SortOrder;
  coinForWrongAnswer?: SortOrder;
  timer?: SortOrder;
  parentId?: SortOrder;
  childId?: SortOrder;
};
