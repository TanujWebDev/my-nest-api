import { Test, TestingModule } from "@nestjs/testing";
import { StpRegisterController } from "./stp-register.controller";
import { StpRegisterService } from "./stp-register.service";
import { StpRegisterDto } from "./dto/stp-register.dto";

describe("StpRegisterController", () => {
  let controller: StpRegisterController;
  let service: StpRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StpRegisterController],
      providers: [StpRegisterService],
    }).compile();

    controller = module.get<StpRegisterController>(StpRegisterController);
    service = module.get<StpRegisterService>(StpRegisterService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should call service with correct DTO", () => {
    const dto: StpRegisterDto = {
      ucc: "U123",
      member: "M001",
      scheme_code: "SCH001",
      amount: 5000,
      frequency: "Monthly",
    };

    const spy = jest.spyOn(service, "processStpRegister").mockReturnValue({
      message: "mocked",
      data: dto,
    });

    const result = controller.handleStpRegister(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      data: dto,
    });
  });
});
