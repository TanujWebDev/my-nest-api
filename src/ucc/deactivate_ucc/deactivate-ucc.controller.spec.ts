import { Test, TestingModule } from "@nestjs/testing";
import { DeactivateUccController } from "./deactivate-ucc.controller";
import { DeactivateUccService } from "./deactivate-ucc.service";
import { DeactivateUccDto } from "./dto/deactivate-ucc.dto";

describe("DeactivateUccController", () => {
  let controller: DeactivateUccController;
  let service: DeactivateUccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeactivateUccController],
      providers: [DeactivateUccService],
    }).compile();

    controller = module.get<DeactivateUccController>(DeactivateUccController);
    service = module.get<DeactivateUccService>(DeactivateUccService);
  });

  it("should call service when status is INACTIVE", () => {
    const dto: DeactivateUccDto = {
      data: { ucc_code: "U001", ucc_status: "INACTIVE" },
    };

    const spy = jest.spyOn(service, "deactivate").mockReturnValue({
      message: "mocked",
      received: dto,
    });

    const result = controller.deactivateUcc(dto);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      message: "mocked",
      received: dto,
    });
  });

  it("should return error when status is not INACTIVE", () => {
    const dto: DeactivateUccDto = {
      data: { ucc_code: "U001", ucc_status: "ACTIVE" },
    };

    const result = controller.deactivateUcc(dto);
    expect(result).toEqual({
      message: "❌ Invalid request for deactivate_ucc",
    });
  });
});
