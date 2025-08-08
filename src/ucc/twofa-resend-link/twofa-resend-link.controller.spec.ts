import { Test, TestingModule } from "@nestjs/testing";
import { TwofaResendLinkController } from "./twofa-resend-link.controller";
import { TwofaResendLinkService } from "./twofa-resend-link.service";
import { TwofaResendLinkDto } from "./dto/twofa-resend-link.dto";

describe("TwofaResendLinkController", () => {
  let controller: TwofaResendLinkController;
  let service: TwofaResendLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwofaResendLinkController],
      providers: [TwofaResendLinkService],
    }).compile();

    controller = module.get<TwofaResendLinkController>(
      TwofaResendLinkController
    );
    service = module.get<TwofaResendLinkService>(TwofaResendLinkService);
  });

  it("should call service with DTO", () => {
    const dto: TwofaResendLinkDto = {
      email: "test@example.com",
      requestId: "REQ123",
    };
    const spy = jest.spyOn(service, "handleResendLink").mockReturnValue({
      message: "mocked",
      received: dto,
    });

    const result = controller.handleResendLink(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      received: dto,
    });
  });
});
