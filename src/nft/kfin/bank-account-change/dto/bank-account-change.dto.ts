import { IsNotEmpty, IsString, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class BankChangeInfo {
  @IsString()
  amc_code!: string;

  @IsString()
  user_code!: string;

  @IsString()
  folio_no!: string;

  @IsString()
  user_txn_no!: string;

  @IsString()
  nct_type!: string;

  @IsString()
  tax_number!: string;

  @IsString()
  broke_cd!: string;

  @IsString()
  ria_code!: string;

  @IsString()
  twofa_auth!: string;

  @IsString()
  nom_opt!: string;

  @IsString()
  doc_type!: string;

  @IsString()
  ab5_br_nam!: string;
}

export class BankAccountChangeDto {
  @IsNotEmpty()
  @IsString()
  user_id!: string;

  @IsNotEmpty()
  @IsString()
  member_code!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  amc!: string;

  @IsNotEmpty()
  @IsString()
  rta!: string;

  @IsNotEmpty()
  @IsString()
  member_id!: string;

  @IsNotEmpty()
  @IsString()
  client_code!: string;

  @IsNotEmpty()
  @IsString()
  entity_type!: string;

  @IsNotEmpty()
  ref_id!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BankChangeInfo)
  bank_change_info!: BankChangeInfo[];

  @IsNotEmpty()
  @IsString()
  image!: string;
}
