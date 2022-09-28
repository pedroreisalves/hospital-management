import { NotFoundError } from './../common/errors/types/NotFoundError';
import { RoomsRepository } from './repositories/rooms.repository';
import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  public async create(createRoomDto: CreateRoomDto) {
    return this.roomsRepository.create(createRoomDto);
  }

  public async findAll() {
    return this.roomsRepository.findAll();
  }

  public async findOne(id: number) {
    const room = await this.roomsRepository.findOne(id);
    if (!room) throw new NotFoundError('Room not found.');
    return room;
  }

  public async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.findOne(id);
    return this.roomsRepository.update(id, updateRoomDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.roomsRepository.remove(id);
  }
}
