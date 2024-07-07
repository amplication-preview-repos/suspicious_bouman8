import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuizUpdateManyWithoutContractsInput } from "./QuizUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  coinForCorrectAnswer?: number | null;
  coinForWrongAnswer?: number | null;
  timer?: number | null;
  parent?: ParentWhereUniqueInput | null;
  child?: ChildWhereUniqueInput | null;
  quizzes?: QuizUpdateManyWithoutContractsInput;
};
