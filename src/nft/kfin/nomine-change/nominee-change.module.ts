// nominee-change.module.ts
import { Module } from "@nestjs/common";
import { NomineeChangeController } from "./nominee-change.controller";
import { NomineeChangeService } from "./nominee-change.service";

@Module({
  controllers: [NomineeChangeController],
  providers: [NomineeChangeService],
})
export class NomineeChangeModule {}
