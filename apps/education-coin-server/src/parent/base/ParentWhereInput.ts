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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChildListRelationFilter } from "../../child/base/ChildListRelationFilter";
import { ContractListRelationFilter } from "../../contract/base/ContractListRelationFilter";
import { QuizListRelationFilter } from "../../quiz/base/QuizListRelationFilter";

@InputType()
class ParentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ChildListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChildListRelationFilter)
  @IsOptional()
  @Field(() => ChildListRelationFilter, {
    nullable: true,
  })
  children?: ChildListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContractListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContractListRelationFilter)
  @IsOptional()
  @Field(() => ContractListRelationFilter, {
    nullable: true,
  })
  contracts?: ContractListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuizListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuizListRelationFilter)
  @IsOptional()
  @Field(() => QuizListRelationFilter, {
    nullable: true,
  })
  quizzes?: QuizListRelationFilter;
}

export { ParentWhereInput as ParentWhereInput };