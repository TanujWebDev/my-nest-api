import { Module } from "@nestjs/common";
import { OrderUpdateController } from "./order-update.controller";
import { OrderUpdateService } from "./order-update.service";

@Module({
  controllers: [OrderUpdateController],
  providers: [OrderUpdateService],
})
export class OrderUpdateModule {}
