import { Injectable } from "@nestjs/common";

@Injectable()
export class StpRegisterService {
  processStpRegister(body: any) {
    console.log("STP Register Body:", body);

    // ✅ Dummy response
    return {
      message: "STP Register API called successfully",
      data: body,
    };
  }
}
