import { Controller, Request, UseGuards, Post } from '@nestjs/common';
// import { LoginFormDTO } from './dto/login-form.dto';
import { AuthService } from './provider/auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authservice.login(req.user);
  }
}
