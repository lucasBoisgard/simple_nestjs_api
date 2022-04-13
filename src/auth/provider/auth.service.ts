import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { Hasher } from '../helper/hasher';
// import { LoginFormDTO } from '../dto/login-form.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPass(password): Promise<string> {
    if (password) return Hasher.hash(password);
  }

  //return true if usermame/pass match
  async ValidateUser(username: string, pass: string): Promise<any> {
    const hashedPass = await Hasher.hash(pass);
    const user = await this.usersService.findOne(username);
    if (user && (await Hasher.validate(pass, hashedPass))) {
      // const { password, ...result } = user;

      return user;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
