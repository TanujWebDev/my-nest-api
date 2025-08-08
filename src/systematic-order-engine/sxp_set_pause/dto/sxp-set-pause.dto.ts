import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
} from "class-validator";

export class SxpSetPauseDto {
  @IsNotEmpty()
  @IsString()
  ucc!: string;

  @IsNotEmpty()
  @IsString()
  member!: string;

  @IsNotEmpty()
  @IsString()
  sxp_id!: string;

  @IsOptional()
  @IsDateString()
  pause_start_date?: string;

  @IsOptional()
  @IsDateString()
  pause_end_date?: string;
}
