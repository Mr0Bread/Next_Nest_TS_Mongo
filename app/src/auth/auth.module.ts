import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'App/users/users.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'App/auth/constants';

@Module({
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [AuthController],
})
export class AuthModule {}
