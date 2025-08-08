import { ListUccService } from "./list-ucc.service";
import { ListUccDto } from "./dto/list-ucc.dto";

describe("ListUccService", () => {
  let service: ListUccService;

  beforeEach(() => {
    service = new ListUccService();
  });

  it("should return success message with received data", () => {
    const dto: ListUccDto = { status: "ACTIVE", member_code: "M123" };
    const result = service.listUcc(dto);

    expect(result).toEqual({
      message: "✅ list_ucc() API hit!",
      receivedData: dto,
    });
  });
});
