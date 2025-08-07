import { Injectable } from "@nestjs/common";

@Injectable()
export class NonResidentIndividualService {
  addNreJoDemat(body: any) {
    return {
      message: "✅ add_ucc() NRE JO Demat API hit!",
      data: body,
    };
  }

  addNreJoBoth(body: any) {
    return {
      message: "✅ add_ucc() NRE JO Both API hit!",
      data: body,
    };
  }
}
