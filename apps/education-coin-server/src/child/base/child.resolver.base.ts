/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Child } from "./Child";
import { ChildCountArgs } from "./ChildCountArgs";
import { ChildFindManyArgs } from "./ChildFindManyArgs";
import { ChildFindUniqueArgs } from "./ChildFindUniqueArgs";
import { CreateChildArgs } from "./CreateChildArgs";
import { UpdateChildArgs } from "./UpdateChildArgs";
import { DeleteChildArgs } from "./DeleteChildArgs";
import { ContractFindManyArgs } from "../../contract/base/ContractFindManyArgs";
import { Contract } from "../../contract/base/Contract";
import { QuizFindManyArgs } from "../../quiz/base/QuizFindManyArgs";
import { Quiz } from "../../quiz/base/Quiz";
import { StatisticsFindManyArgs } from "../../statistics/base/StatisticsFindManyArgs";
import { Statistics } from "../../statistics/base/Statistics";
import { Parent } from "../../parent/base/Parent";
import { ChildService } from "../child.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Child)
export class ChildResolverBase {
  constructor(
    protected readonly service: ChildService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  async _childrenMeta(
    @graphql.Args() args: ChildCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Child])
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  async children(@graphql.Args() args: ChildFindManyArgs): Promise<Child[]> {
    return this.service.children(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Child, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "own",
  })
  async child(
    @graphql.Args() args: ChildFindUniqueArgs
  ): Promise<Child | null> {
    const result = await this.service.child(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "create",
    possession: "any",
  })
  async createChild(@graphql.Args() args: CreateChildArgs): Promise<Child> {
    return await this.service.createChild({
      ...args,
      data: {
        ...args.data,

        parent: args.data.parent
          ? {
              connect: args.data.parent,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  async updateChild(
    @graphql.Args() args: UpdateChildArgs
  ): Promise<Child | null> {
    try {
      return await this.service.updateChild({
        ...args,
        data: {
          ...args.data,

          parent: args.data.parent
            ? {
                connect: args.data.parent,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Child)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "delete",
    possession: "any",
  })
  async deleteChild(
    @graphql.Args() args: DeleteChildArgs
  ): Promise<Child | null> {
    try {
      return await this.service.deleteChild(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Contract], { name: "contracts" })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  async findContracts(
    @graphql.Parent() parent: Child,
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    const results = await this.service.findContracts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Quiz], { name: "quizzes" })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "read",
    possession: "any",
  })
  async findQuizzes(
    @graphql.Parent() parent: Child,
    @graphql.Args() args: QuizFindManyArgs
  ): Promise<Quiz[]> {
    const results = await this.service.findQuizzes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Statistics], { name: "statisticsItems" })
  @nestAccessControl.UseRoles({
    resource: "Statistics",
    action: "read",
    possession: "any",
  })
  async findStatisticsItems(
    @graphql.Parent() parent: Child,
    @graphql.Args() args: StatisticsFindManyArgs
  ): Promise<Statistics[]> {
    const results = await this.service.findStatisticsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Parent, {
    nullable: true,
    name: "parent",
  })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "any",
  })
  async getParent(@graphql.Parent() parent: Child): Promise<Parent | null> {
    const result = await this.service.getParent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}