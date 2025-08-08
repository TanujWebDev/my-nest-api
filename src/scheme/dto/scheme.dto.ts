import { IsString, IsOptional } from "class-validator";

export class SchemeDto {
  @IsOptional()
  @IsString()
  amc_code?: string;

  @IsOptional()
  @IsString()
  rta_code?: string;

  @IsOptional()
  @IsString()
  scheme_type?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
