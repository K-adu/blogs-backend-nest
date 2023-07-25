import { Injectable } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';
import { UpdateBlogDTO } from './dto/update-blog.dto';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private blogsRepository: BlogsRepository) {}

  async createBlogService(body: CreateBlogDTO, req) {
    const data = {
      ...body,
      postedBy: req.user.id,
    };
    return await this.blogsRepository.createBlogRepository(data);
  }

  async updateBlogService(body: UpdateBlogDTO, req, id: string) {
    const data = {
      body,
      userId: req.user.id,
      blogId: id,
    };
    const post = await this.blogsRepository.findLoggedInUserPost(data);
    if (!post) {
      return 'the blog doesnot exist or unauthorized to perform the action';
    }
    return await this.blogsRepository.updateBlogRepository(data);
  }

  async deleteBlogService(req, id) {
    const data = {
      userId: req.user.id,
      blogId: id,
    };
    const post = await this.blogsRepository.findLoggedInUserPost(data);
    if (!post) {
      return 'the blog doesnot exist or unauthorized to perform the action';
    }
    return await this.blogsRepository.deleteBlogRepository(data);
  }

  async getAllBlogsService(userId) {
    return this.blogsRepository.getAllBlogsRepository(userId);
  }
}
