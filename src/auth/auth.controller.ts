import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('pa-login')
  paLogin(@Body() body: any) {
    return this.authService.paLogin(body);
  }

  @Post('member-login')
  memberLogin(@Body() body: any) {
    return this.authService.memberLogin(body);
  }
}
