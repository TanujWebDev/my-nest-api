import { Injectable } from "@nestjs/common";

@Injectable()
export class UploadMisCsvService {
  async upload_mis_csv(data: any[]) {
    // Process the data as needed
    return {
      message: "MIS CSV uploaded successfully",
      received_count: data.length,
      status: "success",
    };
  }
}
