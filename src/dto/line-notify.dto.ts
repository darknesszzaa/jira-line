import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LineNotifyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'anucha.p@gmail.com' })
  public readonly email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 0 })
  public readonly logTimeHours: number;

}
