import { SortOrder } from "../../util/SortOrder";

export type ParentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
};
