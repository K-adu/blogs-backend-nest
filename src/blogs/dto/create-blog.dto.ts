import { IsString, MinLength } from 'class-validator';

export class CreateBlogDTO {
  @IsString()
  title: string;

  @IsString()
  @MinLength(10)
  content: string;
}
