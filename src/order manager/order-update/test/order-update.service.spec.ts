// __tests__/order-update.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { OrderUpdateService } from "../order-update.service";
import { OrderUpdateDto } from "../dto/order-update.dto";

describe("OrderUpdateService", () => {
  let service: OrderUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderUpdateService],
    }).compile();

    service = module.get<OrderUpdateService>(OrderUpdateService);
  });

  it("should return success message with updatedData", () => {
    const dto: OrderUpdateDto = {
      user_id: "user123",
      order_id: "ord456",
      update_data: { status: "updated" },
    };

    const result = service.orderUpdate(dto);
    expect(result).toEqual({
      message: "Order update processed successfully",
      updatedData: dto,
    });
  });
});
