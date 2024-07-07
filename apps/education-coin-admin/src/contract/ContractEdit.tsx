import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { ChildTitle } from "../child/ChildTitle";
import { QuizTitle } from "../quiz/QuizTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="coinForCorrectAnswer"
          source="coinForCorrectAnswer"
        />
        <NumberInput
          step={1}
          label="coinForWrongAnswer"
          source="coinForWrongAnswer"
        />
        <NumberInput step={1} label="timer" source="timer" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceInput source="child.id" reference="Child" label="Child">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="quizzes"
          reference="Quiz"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuizTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
