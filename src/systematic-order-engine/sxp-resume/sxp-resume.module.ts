// src/systematic_order_engine/sxp_resume/sxp-resume.module.ts

import { Module } from "@nestjs/common";
import { SxpResumeController } from "./sxp-resume.controller";
import { SxpResumeService } from "./sxp-resume.service";

@Module({
  controllers: [SxpResumeController],
  providers: [SxpResumeService],
})
export class SxpResumeModule {}
