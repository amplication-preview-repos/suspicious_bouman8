import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChildListRelationFilter } from "../child/ChildListRelationFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";

export type ParentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  children?: ChildListRelationFilter;
  contracts?: ContractListRelationFilter;
  quizzes?: QuizListRelationFilter;
};
