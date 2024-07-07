import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";

export const StatisticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="correctAnswers" source="correctAnswers" />
        <TextField label="wrongAnswers" source="wrongAnswers" />
        <TextField label="totalCoins" source="totalCoins" />
        <ReferenceField label="Child" source="child.id" reference="Child">
          <TextField source={CHILD_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
