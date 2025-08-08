import { Test, TestingModule } from "@nestjs/testing";
import { AddUccCsvController } from "./add-ucc-csv.controller";
import { AddUccCsvService } from "./add-ucc-csv.service";
import { AddUccCsvDto } from "./dto/add-ucc-csv.dto";

describe("AddUccCsvController", () => {
  let controller: AddUccCsvController;
  let service: AddUccCsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddUccCsvController],
      providers: [AddUccCsvService],
    }).compile();

    controller = module.get<AddUccCsvController>(AddUccCsvController);
    service = module.get<AddUccCsvService>(AddUccCsvService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should call service with correct DTO", () => {
    const dto: AddUccCsvDto = {
      records: [
        { ucc: "U001", name: "John Doe", pan: "ABCDE1234F" },
        { ucc: "U002", name: "Jane Doe", pan: "WXYZP9876Q" },
      ],
    };

    const spy = jest.spyOn(service, "runCsvUcc").mockReturnValue({
      message: "mocked",
      totalRecords: dto.records.length,
      receivedData: dto,
    });

    const result = controller.addUccCsvRunner(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      totalRecords: 2,
      receivedData: dto,
    });
  });
});
