import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class GetExchpgServiceDto {
  @IsString()
  @IsNotEmpty()
  user_id!: string;

  @IsString()
  @IsNotEmpty()
  member_code!: string;

  @IsNumber()
  @IsOptional()
  amount?: number;
}
