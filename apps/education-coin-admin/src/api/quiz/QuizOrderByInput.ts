import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
  parentId?: SortOrder;
  contractId?: SortOrder;
  childId?: SortOrder;
};
