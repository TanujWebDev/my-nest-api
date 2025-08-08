import {
  IsString,
  IsArray,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

class NomineeChangeInfo {
  @IsString() amc_code!: string;
  @IsString() user_code!: string;
  @IsString() folio_no!: string;
  @IsString() nct_type!: string;
  @IsString() tax_number!: string;
  @IsString() twofa_auth!: string;
  @IsString() email!: string;
  @IsString() mobile_no!: string;
  @IsString() j1_email!: string;
  @IsString() j1_mobile!: string;
  @IsString() broke_cd!: string;
  @IsString() ria_code!: string;

  @IsString() nom_opt!: string;

  @IsString() nom1_name!: string;
  @IsString() nom1_rela!: string;
  @IsString() nom1_per!: string;
  @IsString() nom1_pan!: string;
  @IsString() nom1_min_f!: string;
  @IsString() nom1_dob!: string;
  @IsString() nom1_guard!: string;
  @IsString() nom1_grela!: string;
  @IsString() nom1_gpan!: string;

  @IsString() nom2_name!: string;
  @IsString() nom2_rela!: string;
  @IsString() nom2_per!: string;
  @IsString() nom2_pan!: string;
  @IsString() nom2_min_f!: string;
  @IsString() nom2_dob!: string;
  @IsString() nom2_guard!: string;
  @IsString() nom2_grela!: string;
  @IsString() nom2_gpan!: string;

  @IsString() nom3_name!: string;
  @IsString() nom3_rela!: string;
  @IsString() nom3_per!: string;
  @IsString() nom3_pan!: string;
  @IsString() nom3_min_f!: string;
  @IsString() nom3_dob!: string;
  @IsString() nom3_guard!: string;
  @IsString() nom3_grela!: string;
  @IsString() nom3_gpan!: string;
}

export class NomineeChangeDto {
  @IsNotEmpty() @IsString() user_id!: string;
  @IsNotEmpty() @IsString() member_code!: string;
  @IsNotEmpty() @IsString() password!: string;
  @IsNotEmpty() @IsString() amc!: string;
  @IsNotEmpty() @IsString() rta!: string;
  @IsNotEmpty() @IsString() member_id!: string;
  @IsNotEmpty() @IsString() client_code!: string;
  @IsNotEmpty() @IsString() entity_type!: string;
  @IsNotEmpty() @IsNumber() ref_id!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NomineeChangeInfo)
  nominee_change_info!: NomineeChangeInfo[];
}
