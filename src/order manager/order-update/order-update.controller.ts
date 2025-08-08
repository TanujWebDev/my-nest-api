// order-update.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { OrderUpdateService } from "./order-update.service";
import { OrderUpdateDto } from "./dto/order-update.dto";

@Controller("order_update")
export class OrderUpdateController {
  constructor(private readonly orderUpdateService: OrderUpdateService) {}

  @Post()
  handleOrderUpdate(@Body() dto: OrderUpdateDto) {
    return this.orderUpdateService.orderUpdate(dto);
  }
}
