import { Injectable } from '@nestjs/common';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async createCommentService(body: CreateCommentDTO, blogId: string, req) {
    const data = {
      ...body,
      commentedBy: req.user.id,
      commentOfBlog: blogId,
    };
    return await this.commentsRepository.createCommentRepository(data);
  }
}
