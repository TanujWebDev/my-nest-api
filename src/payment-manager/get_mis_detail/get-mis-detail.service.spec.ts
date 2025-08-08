import { Test, TestingModule } from "@nestjs/testing";
import { GetMisDetailService } from "./get-mis-detail.service";

describe("GetMisDetailService", () => {
  let service: GetMisDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetMisDetailService],
    }).compile();

    service = module.get<GetMisDetailService>(GetMisDetailService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return correct MIS details response", async () => {
    const input = {
      payment_ref_id: "REF123",
      utrn_no: "UTRN456",
    };

    const result = await service.get_mis_detail(input);

    expect(result).toEqual({
      message: "MIS detail fetched successfully",
      payment_ref_id: "REF123",
      utrn_no: "UTRN456",
      status: "success",
    });
  });
});
