import { ChildUpdateManyWithoutParentsInput } from "./ChildUpdateManyWithoutParentsInput";
import { ContractUpdateManyWithoutParentsInput } from "./ContractUpdateManyWithoutParentsInput";
import { QuizUpdateManyWithoutParentsInput } from "./QuizUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  children?: ChildUpdateManyWithoutParentsInput;
  contracts?: ContractUpdateManyWithoutParentsInput;
  quizzes?: QuizUpdateManyWithoutParentsInput;
};
