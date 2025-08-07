import { Module } from "@nestjs/common";
import { SxpRegisterController } from "./sxp-register.controller";
import { SxpRegisterService } from "./sxp-register.service";

@Module({
  controllers: [SxpRegisterController],
  providers: [SxpRegisterService],
})
export class SxpRegisterModule {}
