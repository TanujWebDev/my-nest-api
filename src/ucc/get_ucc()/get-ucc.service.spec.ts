import { GetUccService } from "./get-ucc.service";
import { GetUccDto } from "./dto/get-ucc.dto";

describe("GetUccService", () => {
  let service: GetUccService;

  beforeEach(() => {
    service = new GetUccService();
  });

  it("should return success message with received data", () => {
    const dto: GetUccDto = { ucc_code: "U123", member_code: "M456" };
    const result = service.handleGetUcc(dto);

    expect(result).toEqual({
      message: "✅ get_ucc() API hit!",
      received: dto,
    });
  });
});
