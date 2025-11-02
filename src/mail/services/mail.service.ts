import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendVerificationCode(to: string, code: string) {
    try {
      await this.mailerService.sendMail({
        to: to,
        subject: 'Your Verification Code',
        template: './verification',
        context: {
          message: 'Use the verification code below to complete your register',
          code: code,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async sendWelcomeEmail(to: string) {
    try {
      await this.mailerService.sendMail({
        to: to,
        subject: 'Welcome to Paw Buddy',
        template: './welcome',
        context: {
          message: 'Welcome to Paw Buddy',
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
