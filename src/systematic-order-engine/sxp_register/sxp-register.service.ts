import { Injectable } from "@nestjs/common";
import { SxpRegisterDto } from "./../dto/sxp-register.dto";

@Injectable()
export class SxpRegisterService {
  processSxp(data: SxpRegisterDto) {
    return {
      message: "SXP Register API Hit Successfully",
      receivedData: data,
    };
  }
}
