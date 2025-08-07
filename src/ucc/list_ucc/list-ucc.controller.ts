import { Controller, Post, Body } from "@nestjs/common";
import { ListUccService } from "./list-ucc.service";

@Controller("v2") // 👈 updated prefix to match endpoint
export class ListUccController {
  constructor(private readonly listUccService: ListUccService) {}

  @Post("list_ucc") // 👈 matches /v2/list_ucc
  listUcc(@Body() body: any) {
    return this.listUccService.listUcc(body);
  }
}
