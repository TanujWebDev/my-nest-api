import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderUpdateService {
  orderUpdate(body: any) {
    return {
      message: "order_update_purchase API hit successfully",
      body,
    };
  }
}
