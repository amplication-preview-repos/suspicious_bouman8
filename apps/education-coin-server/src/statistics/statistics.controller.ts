import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatisticsService } from "./statistics.service";
import { StatisticsControllerBase } from "./base/statistics.controller.base";

@swagger.ApiTags("statistics")
@common.Controller("statistics")
export class StatisticsController extends StatisticsControllerBase {
  constructor(
    protected readonly service: StatisticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
