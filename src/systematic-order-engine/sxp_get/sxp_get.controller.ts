import { Body, Controller, Post } from "@nestjs/common";
import { SxpGetService } from "./sxp_get.service";
import { SxpGetDto } from "./dto/sxp-get.dto";

@Controller("sxp_get")
export class SxpGetController {
  constructor(private readonly sxpGetService: SxpGetService) {}

  @Post()
  handleSxpGet(@Body() dto: SxpGetDto) {
    return this.sxpGetService.handleSxpGet(dto);
  }
}
