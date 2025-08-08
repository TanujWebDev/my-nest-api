import { IsNotEmpty, IsString, IsIn, IsObject } from "class-validator";

class UccData {
  @IsNotEmpty()
  @IsString()
  ucc_code!: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(["ACTIVE", "INACTIVE"])
  ucc_status!: string;
}

export class DeactivateUccDto {
  @IsObject()
  data!: UccData;
}
