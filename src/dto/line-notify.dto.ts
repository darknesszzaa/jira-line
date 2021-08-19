import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LineNotifyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly userId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  public readonly logTimeHours: number;

}
