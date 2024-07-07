import { Child as TChild } from "../api/child/Child";

export const CHILD_TITLE_FIELD = "name";

export const ChildTitle = (record: TChild): string => {
  return record.name?.toString() || String(record.id);
};
