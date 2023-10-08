import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validate({ username, password }: RegisterDto) {
    const user = await this.userService.findOneByUsername(username);
    const pass = await bcrypt.compare(password, user.password);
    if (user && pass) {
      return user;
    }
    return null;
  }

  async register({ username, password }: RegisterDto) {
    const user = await this.userService.findOneByUsername(username);
    if (user) {
      throw new BadRequestException(
        'This user is already exists in the database',
      );
    } else {
      return await this.userService.create({
        username,
        password: await bcrypt.hash(password, 10),
      });
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
