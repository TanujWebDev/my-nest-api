import { Test, TestingModule } from "@nestjs/testing";
import { GetExchpgServiceController } from "../get-exchpg-service.controller";
import { GetExchpgServiceService } from "../get-exchpg-service.service";

describe("GetExchpgServiceController", () => {
  let controller: GetExchpgServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetExchpgServiceController],
      providers: [GetExchpgServiceService],
    }).compile();

    controller = module.get<GetExchpgServiceController>(
      GetExchpgServiceController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return success message", async () => {
    const result = await controller.getExchpgServiceHandler({
      user_id: "U123",
      member_code: "M456",
      amount: 1000,
    });

    expect(result).toHaveProperty("status", "success");
  });
});
