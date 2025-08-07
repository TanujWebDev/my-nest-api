// nav.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { NavService } from "./nav.service";
import { NavMasterListDto } from "./dto/nav-master-list.dto";

@Controller("nav_master_list")
export class NavController {
  constructor(private readonly service: NavService) {}

  @Post()
  handleNavMasterList(@Body("data") dto: NavMasterListDto) {
    return this.service.handleNavMasterList(dto);
  }
}
