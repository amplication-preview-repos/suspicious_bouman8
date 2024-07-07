import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  text?: string | null;
  quiz?: QuizWhereUniqueInput | null;
  answers?: AnswerUpdateManyWithoutQuestionsInput;
};
