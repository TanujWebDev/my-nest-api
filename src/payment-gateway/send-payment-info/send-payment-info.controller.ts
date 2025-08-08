import { Controller, Post, Body } from "@nestjs/common";
import { SendPaymentInfoService } from "./send-payment-info.service";
import { SendPaymentInfoDto } from "./dto/send-payment-info.dto";

@Controller("send_payment_info")
export class SendPaymentInfoController {
  constructor(
    private readonly sendPaymentInfoService: SendPaymentInfoService
  ) {}

  @Post()
  async sendPaymentInfoHandler(@Body("data") data: SendPaymentInfoDto) {
    return this.sendPaymentInfoService.handlePaymentInfo(data);
  }
}
