import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/role.enum';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { RolesGuard } from 'src/shared/guard/role.guard';

@Controller('blogs')
export class BlogsController {
  // create new blogs
  //update exiting blogs- for this need blog id, userid(it is in the req) and body of what we are updating
  //delete a blog - for this need blog id and userid of the logged in user
  //get all blog of the logged in user - for this needed user id
  //get a blog using id- for this need blogs id
  //get public blogs of other users - for this need the user email,
  //search matching blogs using keys
}
