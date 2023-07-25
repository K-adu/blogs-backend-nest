import { IsString, MinLength } from 'class-validator';

export class UpdateBlogDTO {
  @IsString()
  @MinLength(10)
  content: string;
}
