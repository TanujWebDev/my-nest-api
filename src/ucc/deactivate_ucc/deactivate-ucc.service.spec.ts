import { DeactivateUccService } from "./deactivate-ucc.service";
import { DeactivateUccDto } from "./dto/deactivate-ucc.dto";

describe("DeactivateUccService", () => {
  let service: DeactivateUccService;

  beforeEach(() => {
    service = new DeactivateUccService();
  });

  it("should return success message", () => {
    const dto: DeactivateUccDto = {
      data: { ucc_code: "U001", ucc_status: "INACTIVE" },
    };

    const result = service.deactivate(dto);
    expect(result).toEqual({
      message: "✅ deactivate_ucc() API hit!",
      received: dto,
    });
  });
});
