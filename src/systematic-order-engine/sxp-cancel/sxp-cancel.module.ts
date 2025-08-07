import { Module } from "@nestjs/common";
import { SxpCancelController } from "./sxp-cancel.controller";
import { SxpCancelService } from "./sxp-cancel.service";

@Module({
  controllers: [SxpCancelController],
  providers: [SxpCancelService],
})
export class SxpCancelModule {}
