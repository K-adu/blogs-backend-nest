import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './schema/blogs.schema';

@Injectable()
export class BlogsRepository {
  constructor(
    @InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>,
  ) {}

  async createBlogRepository(data) {
    return this.blogModel.create(data);
  }
  async updateBlogRepository(data) {
    return await this.blogModel.findByIdAndUpdate(data.blogId, data.body);
  }

  async findLoggedInUserPost(data) {
    return await this.blogModel.findOne({
      _id: data.blogId,
      postedBy: data.userId,
    });
  }

  async deleteBlogRepository(data) {
    return await this.blogModel.findByIdAndDelete(data.blogId);
  }

  async getAllBlogsRepository(userId) {
    return await this.blogModel.find({ postedBy: userId });
  }

  async getOtherBlogsRepository(email: string) {
    return this.blogModel.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'postedBy',
          foreignField: '_id',
          as: 'authorData',
        },
      },
    ]);
  }
}
