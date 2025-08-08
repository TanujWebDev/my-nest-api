// dto/order-update.dto.ts
import { IsString, IsNotEmpty, IsObject } from "class-validator";

export class OrderUpdateDto {
  @IsNotEmpty()
  @IsString()
  user_id!: string;

  @IsNotEmpty()
  @IsString()
  order_id!: string;

  @IsNotEmpty()
  @IsObject()
  update_data!: Record<string, any>;
}
