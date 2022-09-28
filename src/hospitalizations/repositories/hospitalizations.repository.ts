import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHospitalizationDto } from '../dto/create-hospitalization.dto';
import { UpdateHospitalizationDto } from '../dto/update-hospitalization.dto';

@Injectable()
export class HospitalizationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createHospitalizationDto: CreateHospitalizationDto) {
    return this.prismaService.hospitalization.create({
      data: createHospitalizationDto,
    });
  }

  public async findAll() {
    return this.prismaService.hospitalization.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.hospitalization.findUnique({ where: { id } });
  }

  public async update(
    id: number,
    updateHospitalizationDto: UpdateHospitalizationDto,
  ) {
    return this.prismaService.hospitalization.update({
      where: { id },
      data: updateHospitalizationDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.hospitalization.delete({ where: { id } });
  }

  public async validateRoom(id: number) {
    const room = await this.prismaService.room.findUnique({
      where: { id },
    });
    if (!room) return null;
    return room.available;
  }
}
