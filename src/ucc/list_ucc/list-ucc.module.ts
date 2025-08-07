import { Module } from "@nestjs/common";
import { ListUccController } from "./list-ucc.controller";
import { ListUccService } from "./list-ucc.service";

@Module({
  controllers: [ListUccController],
  providers: [ListUccService],
})
export class ListUccModule {}
