import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Mongoose } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: String, default: 'Normal' })
  role: string;

  // this holds the post that the user posted( one to many relation)
  // @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Post' }] })
  // posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
