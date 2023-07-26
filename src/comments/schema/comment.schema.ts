import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Blog } from 'src/blogs/schema/blogs.schema';
import { User } from 'src/user/schema/user.schema';

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  content: string;

  //the user id who posted the given comment
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  commentedBy: User;

  //the post for which the comment belongs to
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true })
  commentOfBlog: Blog;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
