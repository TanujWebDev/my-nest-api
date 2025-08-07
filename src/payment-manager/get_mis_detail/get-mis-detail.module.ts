import { Module } from "@nestjs/common";
import { GetMisDetailController } from "./get-mis-detail.controller";
import { GetMisDetailService } from "./get-mis-detail.service";

@Module({
  controllers: [GetMisDetailController],
  providers: [GetMisDetailService],
})
export class GetMisDetailModule {}
