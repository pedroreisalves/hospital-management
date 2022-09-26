import { PrismaService } from 'src/prisma/prisma.service';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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

  public async validatePatientId(id: number) {
    const patient = await this.prismaService.patient.findUnique({
      where: { id },
    });
    if (!patient) throw new NotFoundException('Patient not found.');
    return id;
  }

  public async validateHospitalizationId(id: number) {
    const hospitalization = await this.prismaService.hospitalization.findUnique(
      {
        where: { id },
      },
    );
    if (!hospitalization)
      throw new NotFoundException('Hospitalization not found.');
    return id;
  }

  public async validateRoomId(id: number) {
    const room = await this.prismaService.room.findUnique({
      where: { id },
    });
    if (!room) throw new NotFoundException('Room not found.');
    if (!room.available) throw new BadRequestException('Room not available.');
    return id;
  }
}
