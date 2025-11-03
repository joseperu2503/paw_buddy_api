import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendVerificationCode(to: string, code: string) {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Your Verification Code',
      template: './verification',
      context: {
        message: 'Use the verification code below to complete your register',
        code: code,
      },
    });
  }

  async sendWelcomeEmail(to: string, name: string) {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Welcome to Paw Buddy',
      template: './welcome',
      context: {
        name: name,
      },
    });
  }
}
