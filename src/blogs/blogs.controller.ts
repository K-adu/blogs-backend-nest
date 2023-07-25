import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/role.enum';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { RolesGuard } from 'src/shared/guard/role.guard';
import { CreateBlogDTO } from './dto/create-blog.dto';
import { BlogsService } from './blogs.service';
import { UpdateBlogDTO } from './dto/update-blog.dto';

@Controller('blogs')
@UseGuards(AuthGuard, RolesGuard)
export class BlogsController {
  constructor(private blogsService: BlogsService) {}
  // create new blogs
  @Post('/create')
  @Roles(Role.NormalUser)
  async createBlogController(@Body() body: CreateBlogDTO, @Request() req) {
    return await this.blogsService.createBlogService(body, req);
  }

  //update exiting blogs- for this need blog id, userid(it is in the req) and body of what we are updating
  @Patch('/update/:id')
  @Roles(Role.NormalUser)
  async updateBlogController(
    @Body() body: UpdateBlogDTO,
    @Request() req,
    @Param('id') id: string,
  ) {
    return await this.blogsService.updateBlogService(body, req, id);
  }

  //delete a blog - for this need blog id and userid of the logged in user
  @Delete('/delete/:id')
  @Roles(Role.NormalUser)
  async deleteBlogController(@Request() req, @Param('id') id: string) {
    return await this.blogsService.deleteBlogService(req, id);
  }
  //get all blog of the logged in user - for this needed user id
  //get a blog using id- for this need blogs id
  //get public blogs of other users - for this need the user email,
  //search matching blogs using keys
}
