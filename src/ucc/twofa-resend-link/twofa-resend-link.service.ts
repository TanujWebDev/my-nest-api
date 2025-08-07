import { Injectable } from "@nestjs/common";

@Injectable()
export class TwofaResendLinkService {
  handleResendLink(body: any) {
    return {
      message: "✅ 2fa_resend_link API hit!",
      received: body,
    };
  }
}
