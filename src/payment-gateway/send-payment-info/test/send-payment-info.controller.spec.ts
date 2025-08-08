import { Test, TestingModule } from "@nestjs/testing";
import { SendPaymentInfoController } from "../send-payment-info.controller";
import { SendPaymentInfoService } from "../send-payment-info.service";

describe("SendPaymentInfoController", () => {
  let controller: SendPaymentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendPaymentInfoController],
      providers: [SendPaymentInfoService],
    }).compile();

    controller = module.get<SendPaymentInfoController>(
      SendPaymentInfoController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return success message", async () => {
    const result = await controller.sendPaymentInfoHandler({
      user_id: "U123",
      payment_id: "P456",
      amount: 1000,
      status: "SUCCESS",
    });

    expect(result).toHaveProperty("status", "success");
  });
});
