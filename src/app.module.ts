import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { AuthModule } from './auth/auth.module';
import { BlogsModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    CommentsModule,
    LikesModule,
    AuthModule,
    BlogsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/socialmedianest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
