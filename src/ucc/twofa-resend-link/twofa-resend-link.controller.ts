import { Controller, Post, Body } from "@nestjs/common";
import { TwofaResendLinkService } from "./twofa-resend-link.service";
import { TwofaResendLinkDto } from "./dto/twofa-resend-link.dto";

@Controller("2fa_resend_link")
export class TwofaResendLinkController {
  constructor(private readonly service: TwofaResendLinkService) {}

  @Post()
  handleResendLink(@Body() dto: TwofaResendLinkDto) {
    return this.service.handleResendLink(dto);
  }
}
