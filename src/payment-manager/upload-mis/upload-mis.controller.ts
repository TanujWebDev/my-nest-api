import { Controller, Post, Body } from "@nestjs/common";
import { UploadMisService } from "./upload-mis.service";

@Controller("upload_mis")
export class UploadMisController {
  constructor(private readonly uploadMisService: UploadMisService) {}

  @Post()
  async pa_upload_mis(@Body("data") data: any[]) {
    return this.uploadMisService.pa_upload_mis(data);
  }
}
