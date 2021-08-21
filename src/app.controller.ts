import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LineNotifyDto } from './dto/line-notify.dto';
import { RegisterDto } from './dto/register.dto';
import { SignInLineDto } from './dto/signin-line.dto';
import { UsersResponseDto } from './dto/users.response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('register')
  getRegister(@Res() res): any {
    const directory = __dirname + '/views/register.html';
    res.sendFile(directory);
  }

  @Get('register-success/:lineid/:email/:fname/:lname')
  async getSuccess(@Res() res, @Param() param: any): Promise<any> {
    try {
      const user = Object.assign(new RegisterDto(), { lineId: param.lineid, email: param.email, firstName: param.fname, lastName: param.lname })
      await this.appService.createUsers(user);
      const directory = __dirname + '/views/register-success.html';
      res.sendFile(directory);
    } catch (error) {
      res.status(error.getStatus()).send(error.getResponse());
    }
  }

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

  @Post('line-webhook')
  @ApiOperation({ summary: 'Line web hook' })
  @ApiResponse({
    description: 'Line web hook', status: HttpStatus.OK
  })
  lineWebHook(@Body() data): Promise<any> {
    return this.appService.lineWebHook(data);
  }
}
