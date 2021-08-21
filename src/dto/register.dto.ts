import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'xxxxx' })
  lineId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Anucha' })
  firstName: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 'Prapphrom' })
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 'anucha.p@gmail.com' })
  email: string;


}
