// order-update.service.ts
import { Injectable } from "@nestjs/common";
import { OrderUpdateDto } from "./dto/order-update.dto";

@Injectable()
export class OrderUpdateService {
  orderUpdate(dto: OrderUpdateDto) {
    return {
      message: "Order update processed successfully",
      updatedData: dto,
    };
  }
}
