// src/systematic-order-engine/sxp_get/dto/sxp-get.dto.ts

import { IsNotEmpty, IsString } from "class-validator";

export class SxpGetDto {
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
