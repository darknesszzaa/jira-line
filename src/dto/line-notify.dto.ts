import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LineNotifyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ZPg3I4tOivnNPcL9UUdd' })
  public readonly userId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 0 })
  public readonly logTimeHours: number;

}
