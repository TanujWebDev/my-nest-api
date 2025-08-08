import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class TwofaResendLinkDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  requestId!: string; // 2FA request ID
}
