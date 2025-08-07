import { Module } from "@nestjs/common";
import { NonResidentNonIndividualController } from "./non-resident-non-individual.controller";
import { NonResidentNonIndividualService } from "./non-resident-non-individual.service";

@Module({
  controllers: [NonResidentNonIndividualController],
  providers: [NonResidentNonIndividualService],
})
export class NonResidentNonIndividualModule {}
