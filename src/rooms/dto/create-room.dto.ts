import { IsBoolean } from 'class-validator';

export class CreateRoomDto {
  @IsBoolean()
  available: boolean;
}
