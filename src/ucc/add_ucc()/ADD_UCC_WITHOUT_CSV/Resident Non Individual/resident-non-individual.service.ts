import { Injectable } from "@nestjs/common";

@Injectable()
export class ResidentNonIndividualService {
  addResidentCorporate(body: any) {
    return {
      message: "✅ Resident Corporate API hit!",
      receivedData: body,
    };
  }

  addResidentHUF(body: any) {
    return {
      message: "✅ Resident HUF API hit!",
      receivedData: body,
    };
  }

  addResidentPartnershipOrTrust(body: any) {
    return {
      message: "✅ Resident Partnership/Trust API hit!",
      receivedData: body,
    };
  }
}
