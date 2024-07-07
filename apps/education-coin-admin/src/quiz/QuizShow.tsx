import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUIZ_TITLE_FIELD } from "./QuizTitle";
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";

export const QuizShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="subject" source="subject" />
        <TextField label="title" source="title" />
        <ReferenceField label="Parent" source="parent.id" reference="Parent">
          <TextField source={PARENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Contract"
          source="contract.id"
          reference="Contract"
        >
          <TextField source={CONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Child" source="child.id" reference="Child">
          <TextField source={CHILD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Question"
          target="quizId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="text" source="text" />
            <ReferenceField label="Quiz" source="quiz.id" reference="Quiz">
              <TextField source={QUIZ_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
