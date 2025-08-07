// nominee-change.service.ts
import { Injectable } from "@nestjs/common";
import { NomineeChangeDto } from "./dto/nominee-change.dto";

@Injectable()
export class NomineeChangeService {
  handleNomineeChange(dto: NomineeChangeDto) {
    // Test response
    return {
      message: "Nominee change request received successfully",
      receivedData: dto,
    };
  }
}
