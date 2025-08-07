import { Module } from "@nestjs/common";
import { UploadMisModule } from "./upload-mis/upload-mis.module";
import { UploadMisCsvModule } from "./upload-mis-csv/upload-mis-csv.module";
import { GetMisDetailModule } from "./get_mis_detail/get-mis-detail.module";

@Module({
  imports: [UploadMisModule, UploadMisCsvModule, GetMisDetailModule],
})
export class PaymentManagerModule {}
