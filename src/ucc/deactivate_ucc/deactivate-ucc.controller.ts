import { Controller, Post, Body } from "@nestjs/common";
import { DeactivateUccService } from "./deactivate-ucc.service";

@Controller("v2") // 👈 Matches the endpoint
export class DeactivateUccController {
  constructor(private readonly deactivateUccService: DeactivateUccService) {}

  @Post("update_ucc") // 👈 Same endpoint as update_ucc
  deactivateUcc(@Body() body: any) {
    // Check if body has ucc_status: INACTIVE
    if (body?.data?.ucc_status === "INACTIVE") {
      return this.deactivateUccService.deactivate(body);
    } else {
      return {
        message: "❌ Invalid request for deactivate_ucc",
      };
    }
  }
}
