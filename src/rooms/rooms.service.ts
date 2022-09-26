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
    await this.roomsRepository.validateRoomId(id);
    return this.roomsRepository.findOne(id);
  }

  public async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.roomsRepository.validateRoomId(id);
    return this.roomsRepository.update(id, updateRoomDto);
  }

  public async remove(id: number) {
    await this.roomsRepository.validateRoomId(id);
    return this.roomsRepository.remove(id);
  }
}
