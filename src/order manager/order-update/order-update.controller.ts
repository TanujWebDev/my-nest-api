import { Controller, Post, Body } from "@nestjs/common";
import { OrderUpdateService } from "./order-update.service";

@Controller("order_update")
export class OrderUpdateController {
  constructor(private readonly orderUpdateService: OrderUpdateService) {}

  @Post()
  handleOrderUpdate(@Body() body: any) {
    return this.orderUpdateService.orderUpdate(body);
  }
}
