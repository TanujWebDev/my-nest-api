import { Test, TestingModule } from "@nestjs/testing";
import { UploadMisController } from "./upload-mis.controller";
import { UploadMisService } from "./upload-mis.service";
import { UploadMisDto } from "./upload-mis.dto";

describe("UploadMisController", () => {
  let controller: UploadMisController;
  let service: UploadMisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadMisController],
      providers: [UploadMisService],
    }).compile();

    controller = module.get<UploadMisController>(UploadMisController);
    service = module.get<UploadMisService>(UploadMisService);
  });

  it("should call service and return response", async () => {
    const mockData: UploadMisDto[] = [
      { customerName: "Tanuj", amount: 5000, transactionId: "TXN123" },
    ];

    jest.spyOn(service, "pa_upload_mis").mockResolvedValue({
      message: "MIS uploaded successfully",
      received_count: 1,
      status: "success",
    });

    const result = await controller.pa_upload_mis(mockData);
    expect(result.status).toBe("success");
    expect(service.pa_upload_mis).toHaveBeenCalledWith(mockData);
  });
});
