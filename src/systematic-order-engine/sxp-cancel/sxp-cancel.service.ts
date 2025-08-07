import { Injectable } from "@nestjs/common";
import { SxpCancelDto } from "./dto/sxp-cancel.dto";

@Injectable()
export class SxpCancelService {
  cancel(dto: SxpCancelDto) {
    return {
      message: "SXP Cancel request processed successfully",
      data: dto,
    };
  }
}
