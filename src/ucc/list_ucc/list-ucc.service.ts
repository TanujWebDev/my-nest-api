import { Injectable } from "@nestjs/common";

@Injectable()
export class ListUccService {
  listUcc(body: any) {
    return {
      message: "✅ list_ucc() API hit!",
      receivedData: body,
    };
  }
}
