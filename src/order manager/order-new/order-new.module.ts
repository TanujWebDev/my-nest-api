import { Module } from "@nestjs/common";
import { OrderNewController } from "./order-new.controller";
import { OrderNewService } from "./order-new.service";

@Module({
  controllers: [OrderNewController],
  providers: [OrderNewService],
})
export class OrderNewModule {}
