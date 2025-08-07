import { Module } from "@nestjs/common";
import { ResidentNonIndividualController } from "./resident-non-individual.controller";
import { ResidentNonIndividualService } from "./resident-non-individual.service";

@Module({
  controllers: [ResidentNonIndividualController],
  providers: [ResidentNonIndividualService],
})
export class ResidentNonIndividualModule {}
