import { IsString } from 'class-validator';
import { IsInt, IsNumber, IsPositive, MinLength,} from 'class-validator';
import { IsOptional, IsStrongPassword } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsStrongPassword()
  password: string;
}
