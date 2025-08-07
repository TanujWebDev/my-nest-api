import { Module } from "@nestjs/common";
import { SendPaymentInfoController } from "./send-payment-info.controller";
import { SendPaymentInfoService } from "./send-payment-info.service";

@Module({
  controllers: [SendPaymentInfoController],
  providers: [SendPaymentInfoService],
})
export class SendPaymentInfoModule {}
