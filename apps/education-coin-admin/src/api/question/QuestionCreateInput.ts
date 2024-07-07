import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  text?: string | null;
  quiz?: QuizWhereUniqueInput | null;
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
};
