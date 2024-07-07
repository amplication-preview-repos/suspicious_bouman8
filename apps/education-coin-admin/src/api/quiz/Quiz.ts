import { Parent } from "../parent/Parent";
import { Contract } from "../contract/Contract";
import { Child } from "../child/Child";
import { Question } from "../question/Question";

export type Quiz = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subject: string | null;
  title: string | null;
  parent?: Parent | null;
  contract?: Contract | null;
  child?: Child | null;
  questions?: Array<Question>;
};
