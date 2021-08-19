import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInLineDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'anucha' })
  public readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1234' })
  public readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'xxxxxxxx' })
  public readonly lineId: string;

}
