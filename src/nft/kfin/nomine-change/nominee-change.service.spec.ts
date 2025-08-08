import { NomineeChangeService } from "./nominee-change.service";
import { NomineeChangeDto } from "./dto/nominee-change.dto";

describe("NomineeChangeService", () => {
  let service: NomineeChangeService;

  beforeEach(() => {
    service = new NomineeChangeService();
  });

  it("should return success message with received data", () => {
    const dto: NomineeChangeDto = {
      user_id: "user123",
      member_code: "mem456",
      password: "pass",
      amc: "AMC123",
      rta: "RTA456",
      member_id: "MEM789",
      client_code: "CL001",
      entity_type: "INDIVIDUAL",
      ref_id: 987654,
      nominee_change_info: [
        {
          amc_code: "A",
          user_code: "U",
          folio_no: "F",
          nct_type: "T",
          tax_number: "TX",
          twofa_auth: "OTP",
          email: "test@test.com",
          mobile_no: "1234567890",
          j1_email: "j1@test.com",
          j1_mobile: "0987654321",
          broke_cd: "BR",
          ria_code: "RIA",
          nom_opt: "Y",
          nom1_name: "N1",
          nom1_rela: "Brother",
          nom1_per: "100",
          nom1_pan: "ABCDE1234F",
          nom1_min_f: "Y",
          nom1_dob: "1990-01-01",
          nom1_guard: "",
          nom1_grela: "",
          nom1_gpan: "",
          nom2_name: "",
          nom2_rela: "",
          nom2_per: "",
          nom2_pan: "",
          nom2_min_f: "",
          nom2_dob: "",
          nom2_guard: "",
          nom2_grela: "",
          nom2_gpan: "",
          nom3_name: "",
          nom3_rela: "",
          nom3_per: "",
          nom3_pan: "",
          nom3_min_f: "",
          nom3_dob: "",
          nom3_guard: "",
          nom3_grela: "",
          nom3_gpan: "",
        },
      ],
    };

    const result = service.handleNomineeChange(dto);
    expect(result).toEqual({
      message: "Nominee change request received successfully",
      receivedData: dto,
    });
  });
});
