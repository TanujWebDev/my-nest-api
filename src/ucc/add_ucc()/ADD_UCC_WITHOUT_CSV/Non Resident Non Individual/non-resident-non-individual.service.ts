import { Injectable } from "@nestjs/common";

@Injectable()
export class NonResidentNonIndividualService {
  addFpiCat1Demat(body: any) {
    return {
      message: "✅ add_ucc() FPI - Category I SI Demat API hit!",
      data: body,
    };
  }

  addFpiCat1Both(body: any) {
    return {
      message: "✅ add_ucc() FPI - Category I SI Both API hit!",
      data: body,
    };
  }
}
