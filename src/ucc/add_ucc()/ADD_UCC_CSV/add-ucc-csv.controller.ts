import { Controller, Post, Body } from "@nestjs/common";
import { AddUccCsvService } from "./add-ucc-csv.service";

@Controller()
export class AddUccCsvController {
  constructor(private readonly addUccCsvService: AddUccCsvService) {}

  @Post("ucc_csv_runner")
  addUccCsvRunner(@Body() body: any) {
    return this.addUccCsvService.runCsvUcc(body);
  }
}
