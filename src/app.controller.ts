import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LineNotifyDto } from './dto/line-notify.dto';
import { RegisterDto } from './dto/register.dto';
import { SignInLineDto } from './dto/signin-line.dto';
import { UsersResponseDto } from './dto/users.response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  @ApiOperation({ summary: 'Get Users List' })
  @ApiResponse({
      description: 'Get User List Success', status: HttpStatus.OK, type: [UsersResponseDto]
  })
  getUsers(): Promise<any> {
    return this.appService.getUsers();
  }

  @Post('users')
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({
      description: 'Create Users Success', status: HttpStatus.CREATED
  })
  createUsers(@Body() data: RegisterDto): Promise<boolean> {
    return this.appService.createUsers(data);
  }

  @Post('signin-line')
  @ApiOperation({ summary: 'SignIn Line' })
  @ApiResponse({
      description: 'SignIn Line Success', status: HttpStatus.OK
  })
  signInLine(@Body() data: SignInLineDto): Promise<any> {
    return this.appService.signInLine(data);
  }

  @Post('logtime-notify')
  @ApiOperation({ summary: 'Log Time Notify' })
  @ApiResponse({
      description: 'Log Time Notify Success', status: HttpStatus.OK
  })
  lineNotify(@Body() data: LineNotifyDto): Promise<any> {
    return this.appService.lineNotify(data);
  }
}
