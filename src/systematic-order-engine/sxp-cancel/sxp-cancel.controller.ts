import { Controller, Post, Body } from "@nestjs/common";
import { SxpCancelService } from "./sxp-cancel.service";
import { SxpCancelDto } from "./dto/sxp-cancel.dto";

@Controller("sxp_cancel")
export class SxpCancelController {
  constructor(private readonly sxpCancelService: SxpCancelService) {}

  @Post()
  handleSxpCancel(@Body("data") dto: SxpCancelDto) {
    return this.sxpCancelService.cancel(dto);
  }
}
