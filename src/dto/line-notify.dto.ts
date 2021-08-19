import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LineNotifyDto {
  @IsString()
  @IsNotEmpty()
  public readonly userId: string;

  @IsNumber()
  @IsNotEmpty()
  public readonly logTimeHours: number;

}
