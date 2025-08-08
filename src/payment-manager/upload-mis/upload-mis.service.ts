import { Injectable } from "@nestjs/common";
import { UploadMisDto } from "./upload-mis.dto";

@Injectable()
export class UploadMisService {
  async pa_upload_mis(data: UploadMisDto[]) {
    return {
      message: "MIS uploaded successfully",
      received_count: data.length,
      status: "success",
    };
  }
}
