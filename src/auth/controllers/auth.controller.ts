import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CheckAccountRequestDto } from '../dto/check-account-request.dto';
import { LoginRequestDto } from '../dto/login-request.dto';
import { RegisterRequestDto } from '../dto/register-request.dto';
import { VerifyCodeRequestDto } from '../dto/verify-code-request.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() request: RegisterRequestDto) {
    return this.authService.register(request);
  }

  @Post('login')
  login(@Body() request: LoginRequestDto) {
    return this.authService.login(request);
  }

  @HttpCode(200)
  @Post('send-verification-code')
  async sendVerificationCode(@Body() request: CheckAccountRequestDto) {
    return this.authService.sendVerificationCode(request);
  }

  @HttpCode(200)
  @Post('verify-code')
  async verifyCode(@Body() request: VerifyCodeRequestDto) {
    return this.authService.verifyCode(request);
  }

  @HttpCode(200)
  @Post('check-account')
  async checkAccount(@Body() request: CheckAccountRequestDto) {
    return this.authService.checkAccount(request);
  }
}
