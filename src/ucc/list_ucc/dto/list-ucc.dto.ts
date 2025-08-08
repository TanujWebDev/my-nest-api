import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class ListUccDto {
  @IsOptional()
  @IsString()
  member_code?: string;

  @IsNotEmpty()
  @IsString()
  status!: string; // e.g. ACTIVE / INACTIVE
}
