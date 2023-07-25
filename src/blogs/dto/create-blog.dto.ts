import { IsString, MinLength } from 'class-validator';

export class CreateBlogDTO {
  @IsString()
  @MinLength(10)
  content: string;
}
