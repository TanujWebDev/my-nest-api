import { Body, Controller, Post } from "@nestjs/common";
import { SxpRegisterService } from "./sxp-register.service";
import { SxpRegisterDto } from "./../dto/sxp-register.dto";

@Controller("sxp_register")
export class SxpRegisterController {
  constructor(private readonly sxpRegisterService: SxpRegisterService) {}

  @Post()
  handleSxpRegister(@Body() body: SxpRegisterDto) {
    return this.sxpRegisterService.processSxp(body);
  }
}
