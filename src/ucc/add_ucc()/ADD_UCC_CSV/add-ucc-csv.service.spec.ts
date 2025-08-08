import { AddUccCsvService } from "./add-ucc-csv.service";
import { AddUccCsvDto } from "./dto/add-ucc-csv.dto";

describe("AddUccCsvService", () => {
  let service: AddUccCsvService;

  beforeEach(() => {
    service = new AddUccCsvService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return success message with record count", () => {
    const dto: AddUccCsvDto = {
      records: [
        { ucc: "U001", name: "John Doe", pan: "ABCDE1234F" },
        { ucc: "U002", name: "Jane Doe", pan: "WXYZP9876Q" },
      ],
    };

    const result = service.runCsvUcc(dto);
    expect(result).toEqual({
      message: "✅ ucc_csv_runner API hit successfully!",
      totalRecords: 2,
      receivedData: dto,
    });
  });
});
