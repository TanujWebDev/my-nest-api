import { Controller, Post, Body } from "@nestjs/common";
import { GetExchpgServiceService } from "./get-exchpg-service.service";
import { GetExchpgServiceDto } from "./dto/get-exchpg-service.dto";

@Controller("get_exchpg_service")
export class GetExchpgServiceController {
  constructor(private readonly getExchpgService: GetExchpgServiceService) {}

  @Post()
  async getExchpgServiceHandler(@Body("data") data: GetExchpgServiceDto) {
    return this.getExchpgService.processService(data);
  }
}
