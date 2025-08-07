// bank-account-change.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { BankAccountChangeService } from "./bank-account-change.service";
import { BankAccountChangeDto } from "./dto/bank-account-change.dto";

@Controller("nft/kfin/bank_account_change")
export class BankAccountChangeController {
  constructor(private readonly service: BankAccountChangeService) {}

  @Post()
  handleBankAccountChange(@Body() dto: BankAccountChangeDto) {
    return this.service.handleBankAccountChange(dto);
  }
}
