import { Module } from "@nestjs/common";
import { SchemeController } from "./scheme.controller";
import { SchemeService } from "./scheme.service";

@Module({
  controllers: [SchemeController],
  providers: [SchemeService],
})
export class SchemeModule {}
