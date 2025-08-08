import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UploadMisDto {
  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  transactionId: string;
}
