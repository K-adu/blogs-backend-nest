import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { SharedModule } from 'src/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schema/blogs.schema';
import { BlogsRepository } from './blogs.repository';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
  ],
  providers: [BlogsService, BlogsRepository],
  controllers: [BlogsController],
})
export class BlogsModule {}
