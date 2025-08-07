import { Controller, Post, Body } from "@nestjs/common";
import { ResidentIndividualService } from "./resident-individual.service";

@Controller("v2")
export class ResidentIndividualController {
  constructor(private readonly residentService: ResidentIndividualService) {}

  @Post("add_ucc")
  addUccIndividualPhysical(@Body() body: any) {
    return this.residentService.addUccIndividualPhysical(body);
  }

  @Post("add_ucc")
  addUccMinorPhysical(@Body() body: any) {
    return this.residentService.addUccMinorPhysical(body);
  }

  @Post("add_ucc")
  addUccIndividualBoth(@Body() body: any) {
    return this.residentService.addUccIndividualBoth(body);
  }

  @Post("add_ucc")
  addUccIndividualDemat(@Body() body: any) {
    return this.residentService.addUccIndividualDemat(body);
  }
}
