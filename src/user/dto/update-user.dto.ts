import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  @Length(32)
  @MinLength(3)
  fullName: string;

  @IsEmail()
  @IsOptional()
  @Length(32)
  email: string;

  @IsString()
  @IsOptional()
  @Length(32)
  @MinLength(6)
  password: string;
}
