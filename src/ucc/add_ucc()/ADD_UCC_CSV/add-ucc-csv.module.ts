import { Module } from "@nestjs/common";
import { AddUccCsvController } from "./add-ucc-csv.controller";
import { AddUccCsvService } from "./add-ucc-csv.service";

@Module({
  controllers: [AddUccCsvController],
  providers: [AddUccCsvService],
})
export class AddUccCsvModule {}
