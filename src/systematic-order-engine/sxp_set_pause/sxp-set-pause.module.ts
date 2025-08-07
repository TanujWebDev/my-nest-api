import { Module } from "@nestjs/common";
import { SxpSetPauseController } from "./sxp-set-pause.controller";
import { SxpSetPauseService } from "./sxp-set-pause.service";

@Module({
  controllers: [SxpSetPauseController],
  providers: [SxpSetPauseService],
})
export class SxpSetPauseModule {}
