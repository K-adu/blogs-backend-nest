import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthGuard } from 'src/shared/guard/auth.guard';

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
  //
  @UseGuards(AuthGuard)
  @Get('/profile')
  getUserProfile(@Request() req, @Response() res) {
    console.log(req.user);
    const currentUser = req.user;
    return res.json(currentUser);

    //to send the cookies to the out going response use Respponsecookie()
    //response.cookie('keu','value')
  }
}
