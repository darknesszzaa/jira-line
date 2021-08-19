import { IsNotEmpty, IsString } from 'class-validator';

export class SignInLineDto {
  @IsString()
  @IsNotEmpty()
  public readonly username: string;

  @IsString()
  @IsNotEmpty()
  public readonly password: string;

  @IsString()
  @IsNotEmpty()
  public readonly lineId: string;

}
