import { Controller, Post, Body } from "@nestjs/common";
import { DeactivateUccService } from "./deactivate-ucc.service";
import { DeactivateUccDto } from "./dto/deactivate-ucc.dto";

@Controller("v2")
export class DeactivateUccController {
  constructor(private readonly deactivateUccService: DeactivateUccService) {}

  @Post("update_ucc")
  deactivateUcc(@Body() dto: DeactivateUccDto) {
    if (dto.data.ucc_status === "INACTIVE") {
      return this.deactivateUccService.deactivate(dto);
    }
    return { message: "❌ Invalid request for deactivate_ucc" };
  }
}
