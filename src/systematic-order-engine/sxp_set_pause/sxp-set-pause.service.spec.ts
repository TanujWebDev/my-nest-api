import { SxpSetPauseService } from "./sxp-set-pause.service";
import { SxpSetPauseDto } from "./dto/sxp-set-pause.dto";

describe("SxpSetPauseService", () => {
  let service: SxpSetPauseService;

  beforeEach(() => {
    service = new SxpSetPauseService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return success message and dto data", () => {
    const dto: SxpSetPauseDto = {
      ucc: "U001",
      member: "M001",
      sxp_id: "SXP123",
      pause_start_date: "2025-08-08",
      pause_end_date: "2025-09-08",
    };

    const result = service.handleSetPause(dto);
    expect(result).toEqual({
      message: "SXP pause request processed successfully",
      received: dto,
    });
  });
});
