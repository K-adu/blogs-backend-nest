import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Like } from 'src/likes/schema/likes.schema';
import { User } from 'src/user/schema/user.schema';
@Schema()
export class Blog extends Document {
  @Prop({ required: true })
  content: string;

  //reference of the user id of the post who posted it
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  postedBy: User;

  //reference of the comments that the post holds
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];

  @Prop()
  likeCount: number;

  @Prop({ default: false })
  isLocked: boolean;

  // reference of the likes the post holds
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Like' }] })
  likes: Like[];

  // You can add other post-related properties here
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
