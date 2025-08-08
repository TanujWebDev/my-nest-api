import { Controller, Post, Body } from "@nestjs/common";
import { ListUccService } from "./list-ucc.service";
import { ListUccDto } from "./dto/list-ucc.dto";

@Controller("v2")
export class ListUccController {
  constructor(private readonly listUccService: ListUccService) {}

  @Post("list_ucc")
  listUcc(@Body() dto: ListUccDto) {
    return this.listUccService.listUcc(dto);
  }
}
