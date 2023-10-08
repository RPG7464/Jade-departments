import { IsString, IsStrongPassword, MinLength } from 'class-validator';

export class RegisterDto{
  @IsString()
  @MinLength(3)
  username: string;


  @IsStrongPassword()
  password: string;
}