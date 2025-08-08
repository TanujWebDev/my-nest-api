import { Controller, Post, Body } from "@nestjs/common";
import { AddUccCsvService } from "./add-ucc-csv.service";
import { AddUccCsvDto } from "./dto/add-ucc-csv.dto";

@Controller()
export class AddUccCsvController {
  constructor(private readonly addUccCsvService: AddUccCsvService) {}

  @Post("ucc_csv_runner")
  addUccCsvRunner(@Body() dto: AddUccCsvDto) {
    return this.addUccCsvService.runCsvUcc(dto);
  }
}
