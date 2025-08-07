// nominee-change.module.ts
import { Module } from "@nestjs/common";
import { NomineeChangeController } from "./kfin/nomine-change/nominee-change.controller";
import { NomineeChangeService } from "./kfin/nomine-change/nominee-change.service";

@Module({
  controllers: [NomineeChangeController],
  providers: [NomineeChangeService],
})
export class NomineeChangeModule {}
