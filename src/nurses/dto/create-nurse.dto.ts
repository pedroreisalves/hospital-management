import { Gender } from '@prisma/client';
import {
  IsString,
  MinLength,
  IsISO8601,
  IsEmail,
  IsEnum,
} from 'class-validator';

export class CreateNurseDto {
  @IsString()
  @MinLength(10)
  fullName: string;

  @IsISO8601()
  dateOfBirth: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @MinLength(8)
  address: string;
}
