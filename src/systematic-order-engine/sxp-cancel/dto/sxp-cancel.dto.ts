import { IsString, IsNumber } from "class-validator";

export class SxpCancelDto {
  @IsString()
  reg_no!: string;

  @IsNumber()
  reason_cd!: number;

  @IsString()
  reason_cd_msg!: string;

  @IsString()
  sxp_type!: string;
}
