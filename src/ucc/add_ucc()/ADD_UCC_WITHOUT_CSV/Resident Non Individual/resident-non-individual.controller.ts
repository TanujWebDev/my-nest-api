import { Controller, Post, Body } from "@nestjs/common";
import { ResidentNonIndividualService } from "./resident-non-individual.service";

@Controller("v2")
export class ResidentNonIndividualController {
  constructor(private readonly service: ResidentNonIndividualService) {}

  @Post("add_ucc")
  handleUcc(@Body() body: any) {
    const type = body.type;

    if (type === "resident_corporate") {
      return this.service.addResidentCorporate(body);
    } else if (type === "resident_huf") {
      return this.service.addResidentHUF(body);
    } else if (type === "resident_partnership_trust") {
      return this.service.addResidentPartnershipOrTrust(body);
    } else {
      return { message: "❌ Invalid type passed in body" };
    }
  }
}
