import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Blog } from 'src/blogs/schema/blogs.schema';
import { User } from 'src/user/schema/user.schema';

@Schema()
export class Like extends Document {
  //the user who liked the post
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  //the post to which the like belongs to
  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  blogs: Blog;

  // You can add other like-related properties here
}

export const LikeSchema = SchemaFactory.createForClass(Like);
