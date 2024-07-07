import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type QuizWhereInput = {
  id?: StringFilter;
  subject?: StringNullableFilter;
  title?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
  contract?: ContractWhereUniqueInput;
  child?: ChildWhereUniqueInput;
  questions?: QuestionListRelationFilter;
};
