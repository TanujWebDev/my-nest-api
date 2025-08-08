import { Test, TestingModule } from "@nestjs/testing";
import { ListUccController } from "./list-ucc.controller";
import { ListUccService } from "./list-ucc.service";
import { ListUccDto } from "./dto/list-ucc.dto";

describe("ListUccController", () => {
  let controller: ListUccController;
  let service: ListUccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListUccController],
      providers: [ListUccService],
    }).compile();

    controller = module.get<ListUccController>(ListUccController);
    service = module.get<ListUccService>(ListUccService);
  });

  it("should call service with DTO", () => {
    const dto: ListUccDto = { status: "ACTIVE", member_code: "M123" };

    const spy = jest.spyOn(service, "listUcc").mockReturnValue({
      message: "mocked",
      receivedData: dto,
    });

    const result = controller.listUcc(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      receivedData: dto,
    });
  });
});
