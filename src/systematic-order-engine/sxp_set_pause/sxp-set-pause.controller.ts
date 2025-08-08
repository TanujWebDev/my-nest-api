import { Controller, Post, Body } from "@nestjs/common";
import { SxpSetPauseService } from "./sxp-set-pause.service";
import { SxpSetPauseDto } from "./dto/sxp-set-pause.dto";

@Controller("sxp_set_pause")
export class SxpSetPauseController {
  constructor(private readonly sxpSetPauseService: SxpSetPauseService) {}

  @Post()
  handleSetPause(@Body() dto: SxpSetPauseDto) {
    return this.sxpSetPauseService.handleSetPause(dto);
  }
}
