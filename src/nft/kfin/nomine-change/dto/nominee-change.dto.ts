import { IsArray, IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class NomineeChangeInfo {
  amc_code!: string;
  user_code!: string;
  folio_no!: string;
  nct_type!: string;
  tax_number!: string;
  twofa_auth!: string;
  email!: string;
  mobile_no!: string;
  j1_email!: string;
  j1_mobile!: string;
  broke_cd!: string;
  ria_code!: string;
  nom_opt!: string;
  nom1_name!: string;
  nom1_rela!: string;
  nom1_per!: string;
  nom1_pan!: string;
  nom1_min_f!: string;
  nom1_dob!: string;
  nom1_guard!: string;
  nom1_grela!: string;
  nom1_gpan!: string;
  nom2_name!: string;
  nom2_rela!: string;
  nom2_per!: string;
  nom2_pan!: string;
  nom2_min_f!: string;
  nom2_dob!: string;
  nom2_guard!: string;
  nom2_grela!: string;
  nom2_gpan!: string;
  nom3_name!: string;
  nom3_rela!: string;
  nom3_per!: string;
  nom3_pan!: string;
  nom3_min_f!: string;
  nom3_dob!: string;
  nom3_guard!: string;
  nom3_grela!: string;
  nom3_gpan!: string;
}

export class NomineeChangeDto {
  data!: {
    user_id: string;
    member_code: string;
    password: string;
    amc: string;
    rta: string;
    member_id: string;
    client_code: string;
    entity_type: string;
    ref_id: number;
    nominee_change_info: NomineeChangeInfo[];
  };
}
