/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Parent } from "../../parent/base/Parent";
import { Child } from "../../child/base/Child";
import { Quiz } from "../../quiz/base/Quiz";

@ObjectType()
class Contract {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  coinForCorrectAnswer!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  coinForWrongAnswer!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  timer!: number | null;

  @ApiProperty({
    required: false,
    type: () => Parent,
  })
  @ValidateNested()
  @Type(() => Parent)
  @IsOptional()
  parent?: Parent | null;

  @ApiProperty({
    required: false,
    type: () => Child,
  })
  @ValidateNested()
  @Type(() => Child)
  @IsOptional()
  child?: Child | null;

  @ApiProperty({
    required: false,
    type: () => [Quiz],
  })
  @ValidateNested()
  @Type(() => Quiz)
  @IsOptional()
  quizzes?: Array<Quiz>;
}

export { Contract as Contract };