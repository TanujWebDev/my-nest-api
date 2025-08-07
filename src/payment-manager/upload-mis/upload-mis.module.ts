import { Module } from "@nestjs/common";
import { UploadMisController } from "./upload-mis.controller";
import { UploadMisService } from "./upload-mis.service";

@Module({
  controllers: [UploadMisController],
  providers: [UploadMisService],
})
export class UploadMisModule {}
