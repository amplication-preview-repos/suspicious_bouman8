/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContractWhereUniqueInput } from "../../contract/base/ContractWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContractUpdateManyWithoutChildrenInput {
  @Field(() => [ContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractWhereUniqueInput],
  })
  connect?: Array<ContractWhereUniqueInput>;

  @Field(() => [ContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractWhereUniqueInput],
  })
  disconnect?: Array<ContractWhereUniqueInput>;

  @Field(() => [ContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContractWhereUniqueInput],
  })
  set?: Array<ContractWhereUniqueInput>;
}

export { ContractUpdateManyWithoutChildrenInput as ContractUpdateManyWithoutChildrenInput };