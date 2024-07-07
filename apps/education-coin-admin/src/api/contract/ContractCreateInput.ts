import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuizCreateNestedManyWithoutContractsInput } from "./QuizCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  coinForCorrectAnswer?: number | null;
  coinForWrongAnswer?: number | null;
  timer?: number | null;
  parent?: ParentWhereUniqueInput | null;
  child?: ChildWhereUniqueInput | null;
  quizzes?: QuizCreateNestedManyWithoutContractsInput;
};
