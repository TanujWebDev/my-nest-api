// upload-mis-csv/dto/upload-mis-csv.dto.ts
import { IsArray, ValidateNested, IsString, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class MisCsvRecordDto {
  @IsString()
  payment_ref_id: string;

  @IsString()
  utrn_no: string;

  @IsNumber()
  amount: number;

  @IsString()
  date: string;
}

export class UploadMisCsvDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MisCsvRecordDto)
  data: MisCsvRecordDto[];
}
