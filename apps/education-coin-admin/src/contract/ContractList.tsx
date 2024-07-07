import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="coinForCorrectAnswer" source="coinForCorrectAnswer" />
        <TextField label="coinForWrongAnswer" source="coinForWrongAnswer" />
        <TextField label="timer" source="timer" />
        <ReferenceField label="Parent" source="parent.id" reference="Parent">
          <TextField source={PARENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Child" source="child.id" reference="Child">
          <TextField source={CHILD_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
