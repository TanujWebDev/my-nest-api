import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { OrderNewService } from "./order-new.service";
import { OrderNewDto } from "./dto/order-new.dto";

@Controller("order_new")
export class OrderNewController {
  constructor(private readonly orderNewService: OrderNewService) {}

  @Post()
  orderHandler(@Body() body: OrderNewDto) {
    const type = body.data.orders[0]?.type;

    switch (type) {
      case "p":
        return this.orderNewService.purchase(body);
      case "r":
        return this.orderNewService.redeem(body);
      case "nfo":
        return this.orderNewService.nfo(body);
      case "switch":
        return this.orderNewService.switchOrder(body);
      default:
        throw new BadRequestException("Invalid order type");
    }
  }
}
