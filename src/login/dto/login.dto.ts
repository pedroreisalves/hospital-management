import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export enum Role {
  NURSE = 'NURSE',
  DOCTOR = 'DOCTOR',
  RECEPTIONIST = 'RECEPTIONIST',
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
