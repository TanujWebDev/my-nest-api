import { Injectable } from "@nestjs/common";

@Injectable()
export class GetExchpgServiceService {
  async processService(data: any): Promise<any> {
    // You can log or manipulate here if needed
    console.log("Received get_exchpg_service data:", data);

    // Dummy response for now
    return {
      status: "success",
      message: "get_exchpg_service processed successfully",
      dataReceived: data,
    };
  }
}
