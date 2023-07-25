import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post('/create')
  // createUserController(@Body() body: CreateUserDTO) {
  //   return this.userService.createUserService(body);
  // }

  // @Patch()
  // updateUserController(@Body() body: UpdateUserDTO,  @Request() req){
  //   const userId = req.user.id;
  // }
}
