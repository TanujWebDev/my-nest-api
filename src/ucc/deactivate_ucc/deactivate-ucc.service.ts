import { Injectable } from "@nestjs/common";

@Injectable()
export class DeactivateUccService {
  deactivate(body: any) {
    // You can write DB logic or actual service call here
    return {
      message: "✅ deactivate_ucc() API hit!",
      received: body,
    };
  }
}
