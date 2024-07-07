import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";

export type StatisticsWhereInput = {
  id?: StringFilter;
  correctAnswers?: IntNullableFilter;
  wrongAnswers?: IntNullableFilter;
  totalCoins?: IntNullableFilter;
  child?: ChildWhereUniqueInput;
};
