// src/systematic_order_engine/sxp_resume/dto/sxp-resume.dto.ts

import { IsNotEmpty, IsString } from "class-validator";

export class SxpResumeDto {
  @IsNotEmpty()
  @IsString()
  ucc!: string;

  @IsNotEmpty()
  @IsString()
  member!: string;

  @IsNotEmpty()
  @IsString()
  sxp_id!: string;
}
