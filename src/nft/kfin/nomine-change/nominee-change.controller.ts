// nominee-change.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { NomineeChangeService } from "./nominee-change.service";
import { NomineeChangeDto } from "./dto/nominee-change.dto";

@Controller("nft_nominee_change")
export class NomineeChangeController {
  constructor(private readonly service: NomineeChangeService) {}

  @Post()
  handleNomineeChange(@Body() dto: NomineeChangeDto) {
    return this.service.handleNomineeChange(dto);
  }
}
