import { Injectable } from "@nestjs/common";

@Injectable()
export class ResidentIndividualService {
  addUccIndividualPhysical(body: any) {
    return {
      message: "✅ addUccIndividualPhysical API hit successfully!",
      receivedData: body,
    };
  }

  addUccMinorPhysical(body: any) {
    return {
      message: "✅ addUccMinorPhysical API hit successfully!",
      receivedData: body,
    };
  }

  addUccIndividualBoth(body: any) {
    return {
      message: "✅ addUccIndividualBoth API hit successfully!",
      receivedData: body,
    };
  }

  addUccIndividualDemat(body: any) {
    return {
      message: "✅ addUccIndividualDemat API hit successfully!",
      receivedData: body,
    };
  }
}
