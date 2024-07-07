import { SortOrder } from "../../util/SortOrder";

export type ChildOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  classField?: SortOrder;
  schoolNumber?: SortOrder;
  parentId?: SortOrder;
};
