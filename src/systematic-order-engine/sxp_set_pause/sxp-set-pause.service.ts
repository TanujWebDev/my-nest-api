import { Injectable } from "@nestjs/common";

@Injectable()
export class SxpSetPauseService {
  handleSetPause(body: any) {
    console.log("Received SXP SET PAUSE body:", body);

    return {
      message: "SXP pause request processed successfully",
      received: body,
    };
  }
}
