import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
import { query } from 'express';

@Controller('blogs')
@UseGuards(AuthGuard, RolesGuard)
export class BlogsController {
  constructor(private blogsService: BlogsService) {}
  // create
  @Post('/create')
  @Roles(Role.NormalUser)
  async createBlogController(@Body() body: CreateBlogDTO, @Request() req) {
    return await this.blogsService.createBlogService(body, req);
  }

  //update exiting blogs
  @Patch('/update/:id')
  @Roles(Role.NormalUser)
  async updateBlogController(
    @Body() body: UpdateBlogDTO,
    @Request() req,
    @Param('id') id: string,
  ) {
    return await this.blogsService.updateBlogService(body, req, id);
  }

  //delete a blog
  @Delete('/delete/:id')
  @Roles(Role.NormalUser)
  async deleteBlogController(@Request() req, @Param('id') id: string) {
    return await this.blogsService.deleteBlogService(req, id);
  }
  //get all blog of the logged in user
  @Get('/my')
  @Roles(Role.NormalUser)
  async getAllBlogsController(@Request() req) {
    return this.blogsService.getAllBlogsService(req.user.id);
  }

  //get public blogs of other users - for this need the user email,
  //needs email of the user
  @Get('/users')
  @Roles(Role.NormalUser)
  async getOtherBlogsController(@Query() query) {
    return await this.blogsService.getOtherBlogsService(query);
  }

  //search matching blogs using keys
}
