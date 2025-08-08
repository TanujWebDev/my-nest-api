import { Injectable } from "@nestjs/common";
import { DeactivateUccDto } from "./dto/deactivate-ucc.dto";

@Injectable()
export class DeactivateUccService {
  deactivate(dto: DeactivateUccDto) {
    return {
      message: "✅ deactivate_ucc() API hit!",
      received: dto,
    };
  }
}
