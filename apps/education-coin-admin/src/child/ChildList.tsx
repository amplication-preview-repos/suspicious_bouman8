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

export const ChildList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Children"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="class" source="classField" />
        <TextField label="schoolNumber" source="schoolNumber" />
        <ReferenceField label="Parent" source="parent.id" reference="Parent">
          <TextField source={PARENT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
