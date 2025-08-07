import { Injectable } from "@nestjs/common";

@Injectable()
export class AddUccCsvService {
  runCsvUcc(body: any) {
    // dummy response — replace with logic later
    return {
      message: "✅ ucc_csv_runner API hit successfully!",
      receivedData: body,
    };
  }
}
