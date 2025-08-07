import { Injectable } from "@nestjs/common";

@Injectable()
export class GetUccService {
  handleGetUcc(body: any) {
    return {
      message: "✅ get_ucc() API hit!",
      received: body,
    };
  }
}
