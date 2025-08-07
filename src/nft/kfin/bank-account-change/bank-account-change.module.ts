// bank-account-change.module.ts
import { Module } from "@nestjs/common";
import { BankAccountChangeController } from "./bank-account-change.controller";
import { BankAccountChangeService } from "./bank-account-change.service";

@Module({
  controllers: [BankAccountChangeController],
  providers: [BankAccountChangeService],
})
export class BankAccountChangeModule {}
