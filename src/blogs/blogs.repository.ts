import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './schema/blogs.schema';

@Injectable()
export class BlogsRepository {
  constructor(
    @InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>,
  ) {}

  async createBlogRepository(data, user) {
    const addtoDbData = {
      ...data,
      postedBy: user.id,
    };
    console.log(addtoDbData);
    return await this.blogModel.create(addtoDbData);
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
      {
        $project: {
          isLocked: 0,
          'authorData.role': 0,
          'authorData.email': 0,
        },
      },
      {
        $lookup: {
          from: 'comments',
          localField: 'comments',
          foreignField: '_id',
          as: 'comments',
        },
      },
      {
        $project: {
          'comments.commentOfBlog': 0,
        },
      },
      // {
      //   $match: { 'authorData.email': email },
      // },
    ]);
  }

  async searchBlogRepository(key) {
    return await this.blogModel.aggregate([
      {
        $match: {
          title: {
            $regex: key,
            $options: 'i',
          },
        },
      },
    ]);
  }
}
