import { Controller, Post, Body } from "@nestjs/common";
import { GetMisDetailService } from "./get-mis-detail.service";

@Controller("get_mis_detail")
export class GetMisDetailController {
  constructor(private readonly getMisDetailService: GetMisDetailService) {}

  @Post()
  async get_mis_detail(@Body("data") data: any) {
    return this.getMisDetailService.get_mis_detail(data);
  }
}
