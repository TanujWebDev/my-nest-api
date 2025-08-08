import { BankAccountChangeService } from "./bank-account-change.service";
import { BankAccountChangeDto } from "./dto/bank-account-change.dto";

describe("BankAccountChangeService", () => {
  let service: BankAccountChangeService;

  beforeEach(() => {
    service = new BankAccountChangeService();
  });

  it("should return success message with data", () => {
    const dto: BankAccountChangeDto = {
      user_id: "u123",
      member_code: "m001",
      password: "pass",
      amc: "amc01",
      rta: "rta01",
      member_id: "mem001",
      client_code: "cl001",
      entity_type: "INDIVIDUAL",
      ref_id: 123,
      image: "base64imgstring",
      bank_change_info: [
        {
          amc_code: "AMC001",
          user_code: "UC001",
          folio_no: "FOL123",
          user_txn_no: "TXN789",
          nct_type: "NCT",
          tax_number: "TAX999",
          broke_cd: "BR123",
          ria_code: "RIA001",
          twofa_auth: "OTP",
          nom_opt: "Y",
          doc_type: "PAN",
          ab5_br_nam: "Main Branch",
        },
      ],
    };

    const result = service.handleBankAccountChange(dto);

    expect(result).toEqual({
      message: "Bank account change processed successfully",
      data: dto,
    });
  });
});
