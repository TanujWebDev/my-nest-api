import { Injectable } from "@nestjs/common";

@Injectable()
export class SchemeService {
  getSchemeList(body: any) {
    // Dummy logic
    return {
      message: "Scheme list fetched successfully",
      data: [
        { schemeCode: "S123", schemeName: "Growth Fund" },
        { schemeCode: "S456", schemeName: "Balanced Fund" },
      ],
    };
  }
}
