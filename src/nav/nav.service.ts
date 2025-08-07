// nav.service.ts
import { Injectable } from "@nestjs/common";
import { NavMasterListDto } from "./dto/nav-master-list.dto";

@Injectable()
export class NavService {
  handleNavMasterList(dto: NavMasterListDto) {
    // Replace this with actual logic later
    return {
      message: "NAV Master List fetched successfully",
      payload: dto,
    };
  }
}
