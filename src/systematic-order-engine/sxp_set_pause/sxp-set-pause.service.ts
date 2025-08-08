import { Injectable } from "@nestjs/common";
import { SxpSetPauseDto } from "./dto/sxp-set-pause.dto";

@Injectable()
export class SxpSetPauseService {
  handleSetPause(dto: SxpSetPauseDto) {
    console.log("Received SXP SET PAUSE body:", dto);

    return {
      message: "SXP pause request processed successfully",
      received: dto,
    };
  }
}
