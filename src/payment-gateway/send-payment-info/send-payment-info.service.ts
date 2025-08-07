import { Injectable } from "@nestjs/common";

@Injectable()
export class SendPaymentInfoService {
  async handlePaymentInfo(data: any): Promise<any> {
    // Process logic or forward the data
    console.log("Received send_payment_info data:", data);

    // Dummy response
    return {
      status: "success",
      message: "send_payment_info processed successfully",
      dataReceived: data,
    };
  }
}
