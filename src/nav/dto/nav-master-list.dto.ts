import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsObject,
} from "class-validator";

export class NavMasterListDto {
  @IsArray()
  fields!: string[];

  @IsBoolean()
  count_only!: boolean;

  @IsNumber()
  start!: number;

  @IsNumber()
  length!: number;

  @IsOptional()
  @IsObject()
  filter_param?: Record<string, any>;
}
