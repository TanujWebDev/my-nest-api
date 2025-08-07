import { Module } from "@nestjs/common";
import { SxpGetController } from "./sxp_get.controller";
import { SxpGetService } from "./sxp_get.service";

@Module({
  controllers: [SxpGetController],
  providers: [SxpGetService],
})
export class SxpGetModule {}
