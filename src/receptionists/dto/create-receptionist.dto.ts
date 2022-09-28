import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateReceptionistDto {
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

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @MinLength(8)
  address: string;
}
