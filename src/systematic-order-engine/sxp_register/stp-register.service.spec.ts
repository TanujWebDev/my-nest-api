import { StpRegisterService } from "./stp-register.service";
import { StpRegisterDto } from "./dto/stp-register.dto";

describe("StpRegisterService", () => {
  let service: StpRegisterService;

  beforeEach(() => {
    service = new StpRegisterService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return success message and dto data", () => {
    const dto: StpRegisterDto = {
      ucc: "U123",
      member: "M001",
      scheme_code: "SCH001",
      amount: 5000,
      frequency: "Monthly",
    };

    const result = service.processStpRegister(dto);
    expect(result).toEqual({
      message: "STP Register API called successfully",
      data: dto,
    });
  });
});
