import * as Nest from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Nest.Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Nest.Get()
  getHello(@Nest.Req() req: Request): string {
    return this.appService.getHello();
  }
}
