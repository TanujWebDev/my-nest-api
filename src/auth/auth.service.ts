import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  paLogin(body: LoginDto) {
    const { username, password } = body.data;

    if (username === "admin" && password === "1234") {
      return {
        message: "PA Login successful",
        access_token: "sample_token_123",
      };
    }

    return {
      message: "Invalid credentials",
    };
  }

  memberLogin(body: LoginDto) {
    const { username, password } = body.data;

    if (username === "member" && password === "abcd") {
      return {
        message: "Member Login successful",
        access_token: "sample_token_456",
      };
    }

    return {
      message: "Invalid member credentials",
    };
  }
}
