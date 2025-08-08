import { Controller, Post, Body } from "@nestjs/common";
import { UploadMisCsvService } from "./upload-mis-csv.service";
import { UploadMisCsvDto } from "./dto/upload-mis-csv.dto";

@Controller("upload_mis")
export class UploadMisCsvController {
  constructor(private readonly uploadMisCsvService: UploadMisCsvService) {}

  @Post()
  async upload_mis_csv(@Body() dto: UploadMisCsvDto) {
    return this.uploadMisCsvService.upload_mis_csv(dto.data);
  }
}
