import { Test, TestingModule } from "@nestjs/testing";
import { GetUccController } from "./get-ucc.controller";
import { GetUccService } from "./get-ucc.service";
import { GetUccDto } from "./dto/get-ucc.dto";

describe("GetUccController", () => {
  let controller: GetUccController;
  let service: GetUccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUccController],
      providers: [GetUccService],
    }).compile();

    controller = module.get<GetUccController>(GetUccController);
    service = module.get<GetUccService>(GetUccService);
  });

  it("should call service with DTO", () => {
    const dto: GetUccDto = { ucc_code: "U123", member_code: "M456" };

    const spy = jest.spyOn(service, "handleGetUcc").mockReturnValue({
      message: "mocked",
      received: dto,
    });

    const result = controller.handleGetUcc(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      received: dto,
    });
  });
});
