import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatisticsModuleBase } from "./base/statistics.module.base";
import { StatisticsService } from "./statistics.service";
import { StatisticsController } from "./statistics.controller";
import { StatisticsResolver } from "./statistics.resolver";

@Module({
  imports: [StatisticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatisticsController],
  providers: [StatisticsService, StatisticsResolver],
  exports: [StatisticsService],
})
export class StatisticsModule {}
