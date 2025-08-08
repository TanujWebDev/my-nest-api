import { UploadMisService } from "./upload-mis.service";
import { UploadMisDto } from "./upload-mis.dto";

describe("UploadMisService", () => {
  let service: UploadMisService;

  beforeEach(() => {
    service = new UploadMisService();
  });

  it("should return success message with received count", async () => {
    const mockData: UploadMisDto[] = [
      { customerName: "Tanuj", amount: 5000, transactionId: "TXN123" },
      { customerName: "Nancy", amount: 7000, transactionId: "TXN456" },
    ];

    const result = await service.pa_upload_mis(mockData);

    expect(result.status).toBe("success");
    expect(result.received_count).toBe(2);
  });
});
