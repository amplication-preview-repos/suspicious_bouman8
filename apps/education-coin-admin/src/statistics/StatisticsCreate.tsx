import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChildTitle } from "../child/ChildTitle";

export const StatisticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="correctAnswers" source="correctAnswers" />
        <NumberInput step={1} label="wrongAnswers" source="wrongAnswers" />
        <NumberInput step={1} label="totalCoins" source="totalCoins" />
        <ReferenceInput source="child.id" reference="Child" label="Child">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
