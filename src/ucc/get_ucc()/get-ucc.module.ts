import { Module } from "@nestjs/common";
import { GetUccController } from "./get-ucc.controller";
import { GetUccService } from "./get-ucc.service";

@Module({
  controllers: [GetUccController],
  providers: [GetUccService],
})
export class GetUccModule {}
