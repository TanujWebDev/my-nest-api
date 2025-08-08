// src/order-manager/order-new/dto/order-new.dto.ts

import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsOptional,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

class OrderDto {
  @IsString()
  type!: string;

  @IsString()
  @IsOptional()
  scheme_code?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;
}

export class OrderNewDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderDto)
  orders!: OrderDto[];
}
