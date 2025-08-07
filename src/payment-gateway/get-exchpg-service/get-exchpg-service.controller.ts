import { Controller, Post, Body } from "@nestjs/common";
import { GetExchpgServiceService } from "./get-exchpg-service.service";

@Controller("get_exchpg_service")
export class GetExchpgServiceController {
  constructor(private readonly getExchpgService: GetExchpgServiceService) {}

  @Post()
  async getExchpgServiceHandler(@Body("data") data: any) {
    return this.getExchpgService.processService(data);
  }
}
