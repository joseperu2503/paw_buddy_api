import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CountryModule } from 'src/country/country.module';
import { PhoneModule } from 'src/phone/phone.module';
import { CountrySeed } from './services/country.seed';
import { SeedService } from './services/seed.service';
import { UserSeed } from './services/user.seed';

@Module({
  providers: [SeedService, UserSeed, CountrySeed],
  imports: [AuthModule, CountryModule, PhoneModule],
  exports: [SeedService],
})
export class SeedModule {}
