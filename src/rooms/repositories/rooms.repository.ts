import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

@Injectable()
export class RoomsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createRoomDto: CreateRoomDto) {
    return this.prismaService.room.create({ data: createRoomDto });
  }

  public async findAll() {
    return this.prismaService.room.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.room.findUnique({ where: { id } });
  }

  public async update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prismaService.room.update({
      where: { id },
      data: updateRoomDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.room.delete({ where: { id } });
  }
}
