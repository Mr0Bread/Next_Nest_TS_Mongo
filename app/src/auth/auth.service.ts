import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'App/users/users.service';
import { JwtService } from '@nestjs/jwt';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
import { saltRounds } from 'App/auth/constants';
import IUserDocument from 'App/users/interfaces/user.document.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async registerUser(username: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return await this.usersService.addUser({
      username,
      password: hashedPassword
    });
  }

  async loginUser(username: string, password: string): Promise<any> {
    const user: IUserDocument = await this.usersService.getUserByUsername(
      username
    );
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new BadRequestException('Incorrect credentials provided');
    }

    return {
      access_token: this.jwtService.sign({ username, password }),
      redirect: '/'
    };
  }
}
