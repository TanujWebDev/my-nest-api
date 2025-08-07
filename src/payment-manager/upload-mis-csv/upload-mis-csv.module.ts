import { Module } from "@nestjs/common";
import { UploadMisCsvController } from "./upload-mis-csv.controller";
import { UploadMisCsvService } from "./upload-mis-csv.service";

@Module({
  controllers: [UploadMisCsvController],
  providers: [UploadMisCsvService],
})
export class UploadMisCsvModule {}
