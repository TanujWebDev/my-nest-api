import { Injectable } from "@nestjs/common";
import { TwofaResendLinkDto } from "./dto/twofa-resend-link.dto";

@Injectable()
export class TwofaResendLinkService {
  handleResendLink(dto: TwofaResendLinkDto) {
    return {
      message: "✅ 2fa_resend_link API hit!",
      received: dto,
    };
  }
}
