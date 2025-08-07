// bank-account-change.service.ts
import { Injectable } from "@nestjs/common";
import { BankAccountChangeDto } from "./dto/bank-account-change.dto";

@Injectable()
export class BankAccountChangeService {
  handleBankAccountChange(dto: BankAccountChangeDto) {
    // Here you'd call external service, or process data
    return {
      message: "Bank account change processed successfully",
      data: dto,
    };
  }
}
