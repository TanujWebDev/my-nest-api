import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class StpRegisterDto {
  @IsNotEmpty()
  @IsString()
  ucc!: string;

  @IsNotEmpty()
  @IsString()
  member!: string;

  @IsNotEmpty()
  @IsString()
  scheme_code!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsOptional()
  @IsString()
  frequency?: string;
}
