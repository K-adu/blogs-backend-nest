import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/shared/enums/role.enum';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { RolesGuard } from 'src/shared/guard/role.guard';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
@UseGuards(AuthGuard, RolesGuard)
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  //create comment for a post
  @Post('/create/:blogId')
  @Roles(Role.NormalUser)
  async createCommentController(
    @Param('blogId') blogId: string,
    @Body() body: CreateCommentDTO,
    @Request() req,
  ) {
    return await this.commentsService.createCommentService(body, blogId, req);
  }

  //delete your comment for a post
}
