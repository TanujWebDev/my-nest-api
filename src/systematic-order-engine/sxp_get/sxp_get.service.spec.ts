import { SxpGetService } from "./sxp_get.service";
import { SxpGetDto } from "./dto/sxp-get.dto";

describe("SxpGetService", () => {
  let service: SxpGetService;

  beforeEach(() => {
    service = new SxpGetService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return success message and dto data", () => {
    const dto: SxpGetDto = { ucc: "U123", member: "M001", sxp_id: "SXP999" };
    const result = service.handleSxpGet(dto);

    expect(result).toEqual({
      message: "SXP GET request handled successfully",
      data: dto,
    });
  });
});
