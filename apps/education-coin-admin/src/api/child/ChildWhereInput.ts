import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";
import { StatisticsListRelationFilter } from "../statistics/StatisticsListRelationFilter";

export type ChildWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  classField?: StringNullableFilter;
  schoolNumber?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
  contracts?: ContractListRelationFilter;
  quizzes?: QuizListRelationFilter;
  statisticsItems?: StatisticsListRelationFilter;
};
