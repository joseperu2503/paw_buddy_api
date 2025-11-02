import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { MailModule } from './mail/mail.module';
import { SeedCommand } from './seed/commands/seed.command';
import { SeedModule } from './seed/seed.module';
import { VerificationCodesModule } from './verification-codes/verification-codes.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeedModule,
    AuthModule,
    VerificationCodesModule,
    MailModule,
    AccountModule,
    CountryModule,
  ],
  providers: [SeedCommand],
})
export class AppModule {}
