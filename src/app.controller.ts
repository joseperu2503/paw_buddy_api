import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  index() {
    return 'Paw Buddy API';
  }
}
