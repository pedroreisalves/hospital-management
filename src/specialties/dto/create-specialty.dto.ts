import { IsString, MinLength } from 'class-validator';

export class CreateSpecialtyDto {
  @IsString()
  @MinLength(8)
  title: string;
}
