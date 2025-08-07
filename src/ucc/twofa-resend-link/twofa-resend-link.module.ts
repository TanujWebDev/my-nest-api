import { Module } from "@nestjs/common";
import { TwofaResendLinkController } from "./twofa-resend-link.controller";
import { TwofaResendLinkService } from "./twofa-resend-link.service";

@Module({
  controllers: [TwofaResendLinkController],
  providers: [TwofaResendLinkService],
})
export class TwofaResendLinkModule {}
