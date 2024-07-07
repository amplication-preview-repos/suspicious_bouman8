import { ChildCreateNestedManyWithoutParentsInput } from "./ChildCreateNestedManyWithoutParentsInput";
import { ContractCreateNestedManyWithoutParentsInput } from "./ContractCreateNestedManyWithoutParentsInput";
import { QuizCreateNestedManyWithoutParentsInput } from "./QuizCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  children?: ChildCreateNestedManyWithoutParentsInput;
  contracts?: ContractCreateNestedManyWithoutParentsInput;
  quizzes?: QuizCreateNestedManyWithoutParentsInput;
};
