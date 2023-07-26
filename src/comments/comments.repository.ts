import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Comment } from './schema/comment.schema';
import { Blog } from 'src/blogs/schema/blogs.schema';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comment.name) private commentModel: mongoose.Model<Comment>,
    @InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>,
  ) {}

  async createCommentRepository(data) {
    const comment = await this.commentModel.create(data);
    return await this.blogModel.findOneAndUpdate(
      { _id: data.commentOfBlog },
      {
        $push: { comments: comment._id },
      },
    );
  }
}
