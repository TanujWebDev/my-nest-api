import { Module } from "@nestjs/common";
import { ResidentIndividualController } from "./resident-individual.controller";
import { ResidentIndividualService } from "./resident-individual.service";

@Module({
  controllers: [ResidentIndividualController],
  providers: [ResidentIndividualService],
})
export class ResidentIndividualModule {}
