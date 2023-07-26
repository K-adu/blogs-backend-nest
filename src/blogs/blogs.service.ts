import { Injectable } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';
import { UpdateBlogDTO } from './dto/update-blog.dto';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private blogsRepository: BlogsRepository) {}

  async createBlogService(body: CreateBlogDTO, req) {
    return await this.blogsRepository.createBlogRepository(body, req.user);
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
    return await this.blogsRepository.getAllBlogsRepository(userId);
  }

  async getOtherBlogsService(query) {
    const email = query.email;
    return await this.blogsRepository.getOtherBlogsRepository(email);
  }

  async searchBlogController(query) {
    const key = query.key;
    return await this.blogsRepository.searchBlogRepository(key);
  }
}
