import { Injectable } from "@nestjs/common";
import { GetUccDto } from "./dto/get-ucc.dto";

@Injectable()
export class GetUccService {
  handleGetUcc(dto: GetUccDto) {
    return {
      message: "✅ get_ucc() API hit!",
      received: dto,
    };
  }
}
