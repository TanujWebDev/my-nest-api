import { Injectable } from "@nestjs/common";
import { SxpGetDto } from "./dto/sxp-get.dto";

@Injectable()
export class SxpGetService {
  handleSxpGet(dto: SxpGetDto) {
    return {
      message: "SXP GET request handled successfully",
      data: dto,
    };
  }
}
