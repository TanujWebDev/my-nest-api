import { Controller, Post, Body } from "@nestjs/common";
import { NonResidentIndividualService } from "./non-resident-individual.service";

@Controller("v2")
export class NonResidentIndividualController {
  constructor(private readonly service: NonResidentIndividualService) {}

  @Post("add_ucc")
  handleAddUcc(@Body() body: any) {
    const type = body.type;

    switch (type) {
      case "nre_jo_demat":
        return this.service.addNreJoDemat(body);

      case "nre_jo_both":
        return this.service.addNreJoBoth(body);

      default:
        return {
          message: "❌ Invalid type for Non Resident Individual",
        };
    }
  }
}
