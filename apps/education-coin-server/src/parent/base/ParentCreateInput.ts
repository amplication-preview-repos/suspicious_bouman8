/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ChildCreateNestedManyWithoutParentsInput } from "./ChildCreateNestedManyWithoutParentsInput";
import { Type } from "class-transformer";
import { ContractCreateNestedManyWithoutParentsInput } from "./ContractCreateNestedManyWithoutParentsInput";
import { QuizCreateNestedManyWithoutParentsInput } from "./QuizCreateNestedManyWithoutParentsInput";

@InputType()
class ParentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => ChildCreateNestedManyWithoutParentsInput,
  })
  @ValidateNested()
  @Type(() => ChildCreateNestedManyWithoutParentsInput)
  @IsOptional()
  @Field(() => ChildCreateNestedManyWithoutParentsInput, {
    nullable: true,
  })
  children?: ChildCreateNestedManyWithoutParentsInput;

  @ApiProperty({
    required: false,
    type: () => ContractCreateNestedManyWithoutParentsInput,
  })
  @ValidateNested()
  @Type(() => ContractCreateNestedManyWithoutParentsInput)
  @IsOptional()
  @Field(() => ContractCreateNestedManyWithoutParentsInput, {
    nullable: true,
  })
  contracts?: ContractCreateNestedManyWithoutParentsInput;

  @ApiProperty({
    required: false,
    type: () => QuizCreateNestedManyWithoutParentsInput,
  })
  @ValidateNested()
  @Type(() => QuizCreateNestedManyWithoutParentsInput)
  @IsOptional()
  @Field(() => QuizCreateNestedManyWithoutParentsInput, {
    nullable: true,
  })
  quizzes?: QuizCreateNestedManyWithoutParentsInput;
}

export { ParentCreateInput as ParentCreateInput };