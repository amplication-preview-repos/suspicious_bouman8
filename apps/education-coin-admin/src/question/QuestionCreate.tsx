import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuizTitle } from "../quiz/QuizTitle";
import { AnswerTitle } from "../answer/AnswerTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <ReferenceInput source="quiz.id" reference="Quiz" label="Quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};