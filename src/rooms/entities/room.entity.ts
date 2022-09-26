import { Room } from '@prisma/client';

export class RoomEntity implements Room {
  id: number;
  available: boolean;
}
