// src/systematic_order_engine/sxp_resume/sxp-resume.controller.ts

import { Controller, Post, Body } from "@nestjs/common";
import { SxpResumeService } from "./sxp-resume.service";
import { SxpResumeDto } from "./dto/sxp-resume.dto";

@Controller("sxp_resume")
export class SxpResumeController {
  constructor(private readonly sxpResumeService: SxpResumeService) {}

  @Post()
  handleSxpResume(@Body("data") dto: SxpResumeDto) {
    return this.sxpResumeService.resumeSXP(dto);
  }
}
