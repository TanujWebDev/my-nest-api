import { Test, TestingModule } from "@nestjs/testing";
import { SxpGetController } from "./sxp_get.controller";
import { SxpGetService } from "./sxp_get.service";
import { SxpGetDto } from "./dto/sxp-get.dto";

describe("SxpGetController", () => {
  let controller: SxpGetController;
  let service: SxpGetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SxpGetController],
      providers: [SxpGetService],
    }).compile();

    controller = module.get<SxpGetController>(SxpGetController);
    service = module.get<SxpGetService>(SxpGetService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should call service.handleSxpGet with correct DTO", () => {
    const dto: SxpGetDto = { ucc: "U123", member: "M001", sxp_id: "SXP999" };
    const spy = jest.spyOn(service, "handleSxpGet").mockReturnValue({
      message: "mocked",
      data: dto,
    });

    const result = controller.handleSxpGet(dto);

    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      data: dto,
    });
  });
});
