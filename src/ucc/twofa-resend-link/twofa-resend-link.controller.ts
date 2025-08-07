import { Controller, Post, Body } from "@nestjs/common";
import { TwofaResendLinkService } from "./twofa-resend-link.service";

@Controller("2fa_resend_link")
export class TwofaResendLinkController {
  constructor(private readonly service: TwofaResendLinkService) {}

  @Post()
  handleResendLink(@Body() body: any) {
    return this.service.handleResendLink(body);
  }
}
