import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PARENT_TITLE_FIELD } from "./ParentTitle";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";

export const ParentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <ReferenceManyField
          reference="Child"
          target="parentId"
          label="Children"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="class" source="classField" />
            <TextField label="schoolNumber" source="schoolNumber" />
            <ReferenceField
              label="Parent"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contract"
          target="parentId"
          label="Contracts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField
              label="coinForCorrectAnswer"
              source="coinForCorrectAnswer"
            />
            <TextField label="coinForWrongAnswer" source="coinForWrongAnswer" />
            <TextField label="timer" source="timer" />
            <ReferenceField
              label="Parent"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Child" source="child.id" reference="Child">
              <TextField source={CHILD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Quiz" target="parentId" label="Quizzes">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="subject" source="subject" />
            <TextField label="title" source="title" />
            <ReferenceField
              label="Parent"
              source="parent.id"
              reference="Parent"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
