import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async createUserRepo(data: CreateUserDTO) {
    return await this.userModel.create(data);
  }

  async updateUserRepo(userId: string, data: UpdateUserDTO) {
    return await this.userModel.findByIdAndUpdate({ userId, data });
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }
}
