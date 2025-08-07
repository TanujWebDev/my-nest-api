import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderNewService {
  purchase(body: any) {
    return {
      message: "order_new_purchase API hit successfully",
      body,
    };
  }

  redeem(body: any) {
    return {
      message: "order_new_redeem API hit successfully",
      body,
    };
  }

  nfo(body: any) {
    return {
      message: "order_new_nfo API hit successfully",
      body,
    };
  }

  switchOrder(body: any) {
    return {
      message: "order_new_switch API hit successfully",
      body,
    };
  }
}
