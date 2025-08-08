// src/order-manager/order-new/order-new.controller.spec.ts

import { Test, TestingModule } from "@nestjs/testing";
import { OrderNewController } from "./order-new.controller";
import { OrderNewService } from "./order-new.service";

describe("OrderNewController", () => {
  let controller: OrderNewController;
  let service: OrderNewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderNewController],
      providers: [OrderNewService],
    }).compile();

    controller = module.get<OrderNewController>(OrderNewController);
    service = module.get<OrderNewService>(OrderNewService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it('should call purchase when type is "p"', () => {
    const body = { data: { orders: [{ type: "p" }] } };
    const result = { message: "order_new_purchase API hit successfully", body };

    jest.spyOn(service, "purchase").mockReturnValue(result as any);

    expect(controller.orderHandler(body)).toEqual(result);
  });

  it("should return invalid for unknown type", () => {
    const body = { data: { orders: [{ type: "abc" }] } };
    expect(controller.orderHandler(body)).toEqual({
      message: "Invalid order type",
    });
  });
});
