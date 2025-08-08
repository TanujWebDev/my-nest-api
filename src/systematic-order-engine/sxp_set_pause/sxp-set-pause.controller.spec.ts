import { Test, TestingModule } from "@nestjs/testing";
import { SxpSetPauseController } from "./sxp-set-pause.controller";
import { SxpSetPauseService } from "./sxp-set-pause.service";
import { SxpSetPauseDto } from "./dto/sxp-set-pause.dto";

describe("SxpSetPauseController", () => {
  let controller: SxpSetPauseController;
  let service: SxpSetPauseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SxpSetPauseController],
      providers: [SxpSetPauseService],
    }).compile();

    controller = module.get<SxpSetPauseController>(SxpSetPauseController);
    service = module.get<SxpSetPauseService>(SxpSetPauseService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should call service with correct DTO", () => {
    const dto: SxpSetPauseDto = {
      ucc: "U001",
      member: "M001",
      sxp_id: "SXP123",
      pause_start_date: "2025-08-08",
      pause_end_date: "2025-09-08",
    };

    const spy = jest.spyOn(service, "handleSetPause").mockReturnValue({
      message: "mocked",
      received: dto,
    });

    const result = controller.handleSetPause(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      received: dto,
    });
  });
});
