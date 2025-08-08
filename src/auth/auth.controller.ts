import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("pa-login")
  paLogin(@Body() body: LoginDto) {
    return this.authService.paLogin(body);
  }

  @Post("member-login")
  memberLogin(@Body() body: LoginDto) {
    return this.authService.memberLogin(body);
  }
}
