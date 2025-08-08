import { Injectable } from "@nestjs/common";
import { OrderNewDto } from "./dto/order-new.dto";

@Injectable()
export class OrderNewService {
  purchase(body: OrderNewDto) {
    return {
      message: "order_new_purchase API hit successfully",
      body,
    };
  }

  redeem(body: OrderNewDto) {
    return {
      message: "order_new_redeem API hit successfully",
      body,
    };
  }

  nfo(body: OrderNewDto) {
    return {
      message: "order_new_nfo API hit successfully",
      body,
    };
  }

  switchOrder(body: OrderNewDto) {
    return {
      message: "order_new_switch API hit successfully",
      body,
    };
  }
}
