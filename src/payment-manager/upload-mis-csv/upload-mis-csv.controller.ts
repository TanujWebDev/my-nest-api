import { Controller, Post, Body } from "@nestjs/common";
import { UploadMisCsvService } from "./upload-mis-csv.service";

@Controller("upload_mis")
export class UploadMisCsvController {
  constructor(private readonly uploadMisCsvService: UploadMisCsvService) {}

  @Post()
  async upload_mis_csv(@Body("data") data: any[]) {
    return this.uploadMisCsvService.upload_mis_csv(data);
  }
}
