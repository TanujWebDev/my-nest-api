import { Controller, Post, Body } from "@nestjs/common";
import { OrderNewService } from "./order-new.service";

@Controller("order_new")
export class OrderNewController {
  constructor(private readonly orderNewService: OrderNewService) {}

  @Post()
  orderHandler(@Body() body: any) {
    const type = body?.data?.orders?.[0]?.type;

    console.log("Received type:", type); // 👈 Add this line

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
        return { message: "Invalid order type" };
    }
  }
}
