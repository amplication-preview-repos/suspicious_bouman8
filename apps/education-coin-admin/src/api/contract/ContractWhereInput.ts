import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";

export type ContractWhereInput = {
  id?: StringFilter;
  coinForCorrectAnswer?: IntNullableFilter;
  coinForWrongAnswer?: IntNullableFilter;
  timer?: IntNullableFilter;
  parent?: ParentWhereUniqueInput;
  child?: ChildWhereUniqueInput;
  quizzes?: QuizListRelationFilter;
};
