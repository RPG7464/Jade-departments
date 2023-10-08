import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authservice.register(registerDto);
  }
  @Post('login')
  login(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authservice.login(registerDto);
  }
}
