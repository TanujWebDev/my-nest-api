import { NavService } from "./nav.service";
import { NavMasterListDto } from "./dto/nav-master-list.dto";

describe("NavService", () => {
  let service: NavService;

  beforeEach(() => {
    service = new NavService();
  });

  it("should return payload and message for valid input", () => {
    const dto: NavMasterListDto = {
      fields: ["nav_id", "nav_value"],
      count_only: false,
      start: 0,
      length: 10,
      filter_param: { status: "active" },
    };

    const result = service.handleNavMasterList(dto);

    expect(result).toEqual({
      message: "NAV Master List fetched successfully",
      payload: dto,
    });
  });

  it("should handle missing optional filter_param", () => {
    const dto: NavMasterListDto = {
      fields: ["nav_id"],
      count_only: true,
      start: 0,
      length: 5,
    };

    const result = service.handleNavMasterList(dto);

    expect(result).toEqual({
      message: "NAV Master List fetched successfully",
      payload: dto,
    });
  });
});
