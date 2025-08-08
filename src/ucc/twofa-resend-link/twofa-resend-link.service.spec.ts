import { TwofaResendLinkService } from "./twofa-resend-link.service";
import { TwofaResendLinkDto } from "./dto/twofa-resend-link.dto";

describe("TwofaResendLinkService", () => {
  let service: TwofaResendLinkService;

  beforeEach(() => {
    service = new TwofaResendLinkService();
  });

  it("should return success message with received data", () => {
    const dto: TwofaResendLinkDto = {
      email: "test@example.com",
      requestId: "REQ123",
    };
    const result = service.handleResendLink(dto);

    expect(result).toEqual({
      message: "✅ 2fa_resend_link API hit!",
      received: dto,
    });
  });
});
