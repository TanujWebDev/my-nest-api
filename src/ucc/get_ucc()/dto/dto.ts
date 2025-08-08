import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class GetUccDto {
  @IsNotEmpty()
  @IsString()
  ucc_code!: string;

  @IsOptional()
  @IsString()
  member_code?: string;
}
