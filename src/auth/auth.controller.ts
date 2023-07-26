import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  siginController(@Body() body: CreateUserDTO) {
    return this.authService.signinService(body);
  }

  @Post('/login')
  loginController(@Body() body: LoginUserDto) {
    return this.authService.loginService(body);
  }
}
