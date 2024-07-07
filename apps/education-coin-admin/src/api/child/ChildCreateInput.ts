import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ContractCreateNestedManyWithoutChildrenInput } from "./ContractCreateNestedManyWithoutChildrenInput";
import { QuizCreateNestedManyWithoutChildrenInput } from "./QuizCreateNestedManyWithoutChildrenInput";
import { StatisticsCreateNestedManyWithoutChildrenInput } from "./StatisticsCreateNestedManyWithoutChildrenInput";

export type ChildCreateInput = {
  name?: string | null;
  classField?: string | null;
  schoolNumber?: string | null;
  parent?: ParentWhereUniqueInput | null;
  contracts?: ContractCreateNestedManyWithoutChildrenInput;
  quizzes?: QuizCreateNestedManyWithoutChildrenInput;
  statisticsItems?: StatisticsCreateNestedManyWithoutChildrenInput;
};
