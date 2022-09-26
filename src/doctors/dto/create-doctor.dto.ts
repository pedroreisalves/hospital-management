import { Gender } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateDoctorDto {
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

  @IsNumber()
  specialtyId: number;
}
