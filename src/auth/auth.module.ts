import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [UserModule, SharedModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
