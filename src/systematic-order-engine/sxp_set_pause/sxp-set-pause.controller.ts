import { Controller, Post, Body } from "@nestjs/common";
import { SxpSetPauseService } from "./sxp-set-pause.service";

@Controller("sxp_set_pause")
export class SxpSetPauseController {
  constructor(private readonly sxpSetPauseService: SxpSetPauseService) {}

  @Post()
  handleSetPause(@Body() body: any) {
    return this.sxpSetPauseService.handleSetPause(body);
  }
}
