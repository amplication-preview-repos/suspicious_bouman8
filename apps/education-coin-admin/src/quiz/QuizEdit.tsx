import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { ChildTitle } from "../child/ChildTitle";
import { QuestionTitle } from "../question/QuestionTitle";

export const QuizEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="subject" source="subject" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <ReferenceInput source="child.id" reference="Child" label="Child">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
