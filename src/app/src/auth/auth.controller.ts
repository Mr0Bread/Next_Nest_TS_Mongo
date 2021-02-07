import { Body, Controller, Post } from '@nestjs/common';
import { ValidateUserPasswordPipe } from 'App/auth/pipes/ValidateUserPassword.pipe';
import { AuthService } from 'App/auth/auth.service';
import { ValidateUsernamePipe } from 'App/auth/pipes/ValidateUsername.pipe';
import { ValidateUsernameExistencePipe } from 'App/auth/pipes/ValidateUsernameExistence.pipe';
import { ValidateUsernameInexistencePipe } from 'App/auth/pipes/ValidateUsernameInexistence.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  async signUp(
    @Body('login', ValidateUsernamePipe, ValidateUsernameExistencePipe) login,
    @Body('password', ValidateUserPasswordPipe) password
  ) {
    return await this.authService.registerUser(login, password);
  }

  @Post('signIn')
  async signIn(
    @Body('login', ValidateUsernamePipe, ValidateUsernameInexistencePipe)
    login: string,
    @Body('password') password: string
  ) {
    return await this.authService.loginUser(login, password);
  }
}
