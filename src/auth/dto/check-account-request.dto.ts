import { OmitType } from '@nestjs/mapped-types';
import { LoginRequestDto } from './login-request.dto';

export class CheckAccountRequestDto extends OmitType(LoginRequestDto, [
  'password',
] as const) {}
