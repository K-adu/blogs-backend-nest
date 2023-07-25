import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @Length(32)
  @MinLength(3)
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(32)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(32)
  @MinLength(6)
  password: string;
}
