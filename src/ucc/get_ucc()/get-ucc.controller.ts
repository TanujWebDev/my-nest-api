import { Controller, Post, Body } from "@nestjs/common";
import { GetUccService } from "./get-ucc.service";
import { GetUccDto } from "./dto/get-ucc.dto";

@Controller("v2")
export class GetUccController {
  constructor(private readonly getUccService: GetUccService) {}

  @Post("get_ucc")
  handleGetUcc(@Body() dto: GetUccDto) {
    return this.getUccService.handleGetUcc(dto);
  }
}
