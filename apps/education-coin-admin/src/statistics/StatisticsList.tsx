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
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";

export const StatisticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StatisticsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="correctAnswers" source="correctAnswers" />
        <TextField label="wrongAnswers" source="wrongAnswers" />
        <TextField label="totalCoins" source="totalCoins" />
        <ReferenceField label="Child" source="child.id" reference="Child">
          <TextField source={CHILD_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
