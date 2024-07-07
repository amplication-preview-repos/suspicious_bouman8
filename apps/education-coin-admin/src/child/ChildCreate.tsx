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

import { ParentTitle } from "../parent/ParentTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { QuizTitle } from "../quiz/QuizTitle";
import { StatisticsTitle } from "../statistics/StatisticsTitle";

export const ChildCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="class" source="classField" />
        <TextInput label="schoolNumber" source="schoolNumber" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="contracts"
          reference="Contract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="quizzes"
          reference="Quiz"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuizTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="statisticsItems"
          reference="Statistics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatisticsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
