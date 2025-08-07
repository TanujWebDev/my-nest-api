import { Injectable } from "@nestjs/common";

@Injectable()
export class GetMisDetailService {
  async get_mis_detail(data: any) {
    const { payment_ref_id, utrn_no } = data;

    // Dummy response – actual logic DB/API se aayega
    return {
      message: "MIS detail fetched successfully",
      payment_ref_id,
      utrn_no,
      status: "success",
    };
  }
}
