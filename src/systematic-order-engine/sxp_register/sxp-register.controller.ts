import { Controller, Post, Body } from "@nestjs/common";
import { StpRegisterService } from "./stp-register.service";
import { StpRegisterDto } from "./dto/stp-register.dto";

@Controller("sxp_register")
export class StpRegisterController {
  constructor(private readonly stpRegisterService: StpRegisterService) {}

  @Post("stp_register")
  handleStpRegister(@Body() dto: StpRegisterDto) {
    return this.stpRegisterService.processStpRegister(dto);
  }
}
