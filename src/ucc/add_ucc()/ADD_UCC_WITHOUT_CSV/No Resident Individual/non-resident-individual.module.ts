import { Module } from "@nestjs/common";
import { NonResidentIndividualController } from "./non-resident-individual.controller";
import { NonResidentIndividualService } from "./non-resident-individual.service";

@Module({
  controllers: [NonResidentIndividualController],
  providers: [NonResidentIndividualService],
})
export class NonResidentIndividualModule {}
