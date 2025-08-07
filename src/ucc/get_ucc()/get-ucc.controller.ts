import { Controller, Post, Body } from "@nestjs/common";
import { GetUccService } from "./get-ucc.service";

@Controller("v2")
export class GetUccController {
  constructor(private readonly getUccService: GetUccService) {}

  @Post("get_ucc")
  handleGetUcc(@Body() body: any) {
    return this.getUccService.handleGetUcc(body);
  }
}
