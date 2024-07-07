import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  quiz?: QuizWhereUniqueInput;
  answers?: AnswerListRelationFilter;
};
