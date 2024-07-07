import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ContractUpdateManyWithoutChildrenInput } from "./ContractUpdateManyWithoutChildrenInput";
import { QuizUpdateManyWithoutChildrenInput } from "./QuizUpdateManyWithoutChildrenInput";
import { StatisticsUpdateManyWithoutChildrenInput } from "./StatisticsUpdateManyWithoutChildrenInput";

export type ChildUpdateInput = {
  name?: string | null;
  classField?: string | null;
  schoolNumber?: string | null;
  parent?: ParentWhereUniqueInput | null;
  contracts?: ContractUpdateManyWithoutChildrenInput;
  quizzes?: QuizUpdateManyWithoutChildrenInput;
  statisticsItems?: StatisticsUpdateManyWithoutChildrenInput;
};
