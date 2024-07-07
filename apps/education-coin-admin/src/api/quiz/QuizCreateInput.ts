import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  subject?: string | null;
  title?: string | null;
  parent?: ParentWhereUniqueInput | null;
  contract?: ContractWhereUniqueInput | null;
  child?: ChildWhereUniqueInput | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
};
