import { Controller, Post, Body } from "@nestjs/common";
import { SchemeService } from "./scheme.service";

@Controller("scheme")
export class SchemeController {
  constructor(private readonly schemeService: SchemeService) {}

  @Post("list")
  getSchemeList(@Body() body: any) {
    return this.schemeService.getSchemeList(body);
  }
}
