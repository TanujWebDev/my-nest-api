import { Controller, Post, Body } from "@nestjs/common";
import { NonResidentNonIndividualService } from "./non-resident-non-individual.service";

@Controller("v2")
export class NonResidentNonIndividualController {
  constructor(private readonly service: NonResidentNonIndividualService) {}

  @Post("add_ucc")
  handleAddUcc(@Body() body: any) {
    const type = body.type;

    switch (type) {
      case "fpi_cat1_si_demat":
        return this.service.addFpiCat1Demat(body);

      case "fpi_cat1_si_both":
        return this.service.addFpiCat1Both(body);

      default:
        return {
          message: "❌ Invalid type for Non Resident Non Individual",
        };
    }
  }
}
