import { Controller, Post, Body } from "@nestjs/common";
import { StpRegisterService } from "./stp-register.service";

@Controller("sxp_register")
export class StpRegisterController {
  constructor(private readonly stpRegisterService: StpRegisterService) {}

  @Post("stp_register")
  handleStpRegister(@Body() body: any) {
    return this.stpRegisterService.processStpRegister(body);
  }
}
