import { Injectable } from "@nestjs/common";
import { AddUccCsvDto } from "./dto/add-ucc-csv.dto";

@Injectable()
export class AddUccCsvService {
  runCsvUcc(dto: AddUccCsvDto) {
    return {
      message: "✅ ucc_csv_runner API hit successfully!",
      totalRecords: dto.records.length,
      receivedData: dto,
    };
  }
}
