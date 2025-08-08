import { Injectable } from "@nestjs/common";
import { StpRegisterDto } from "./dto/stp-register.dto";

@Injectable()
export class StpRegisterService {
  processStpRegister(dto: StpRegisterDto) {
    console.log("STP Register Body:", dto);

    return {
      message: "STP Register API called successfully",
      data: dto,
    };
  }
}
