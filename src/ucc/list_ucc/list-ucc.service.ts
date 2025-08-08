import { Injectable } from "@nestjs/common";
import { ListUccDto } from "./dto/list-ucc.dto";

@Injectable()
export class ListUccService {
  listUcc(dto: ListUccDto) {
    return {
      message: "✅ list_ucc() API hit!",
      receivedData: dto,
    };
  }
}
