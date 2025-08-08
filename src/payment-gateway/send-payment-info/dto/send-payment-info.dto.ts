import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class SendPaymentInfoDto {
  @IsString()
  @IsNotEmpty()
  user_id!: string;

  @IsString()
  @IsNotEmpty()
  payment_id!: string;

  @IsNumber()
  @IsOptional()
  amount?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
