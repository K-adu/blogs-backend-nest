import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateBlogDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  content: string;
}
