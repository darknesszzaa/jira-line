import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LineNotifyDto } from './dto/line-notify.dto';
import { RegisterDto } from './dto/register.dto';
import { SignInLineDto } from './dto/signin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  getUsers(): Promise<any> {
    return this.appService.getUsers();
  }

  @Post('users')
  createUsers(@Body() data: RegisterDto): Promise<boolean> {
    return this.appService.createUsers(data);
  }

  @Post('signin-line')
  signInLine(@Body() data: SignInLineDto): Promise<any> {
    return this.appService.signInLine(data);
  }

  @Post('logtime-notify')
  lineNotify(@Body() data: LineNotifyDto): Promise<any> {
    return this.appService.lineNotify(data);
  }
}
