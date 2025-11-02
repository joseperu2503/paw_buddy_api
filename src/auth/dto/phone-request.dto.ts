import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class PhoneRequestDto {
  @IsPositive()
  @IsNumber()
  countryId: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.replace(/\s+/g, ''))
  number: string;
}
