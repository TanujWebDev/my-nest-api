import { Module } from "@nestjs/common";
import { DeactivateUccController } from "./deactivate-ucc.controller";
import { DeactivateUccService } from "./deactivate-ucc.service";

@Module({
  controllers: [DeactivateUccController],
  providers: [DeactivateUccService],
})
export class DeactivateUccModule {}
