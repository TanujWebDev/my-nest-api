import { Module } from "@nestjs/common";
import { GetExchpgServiceController } from "./get-exchpg-service.controller";
import { GetExchpgServiceService } from "./get-exchpg-service.service";

@Module({
  controllers: [GetExchpgServiceController],
  providers: [GetExchpgServiceService],
})
export class GetExchpgServiceModule {}
