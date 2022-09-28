import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';

@Injectable()
export class DoctorsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createDoctorDto: CreateDoctorDto) {
    return this.prismaService.doctor.create({ data: createDoctorDto });
  }

  public async findAll() {
    return this.prismaService.doctor.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.doctor.findUnique({ where: { id } });
  }

  public async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.prismaService.doctor.update({
      where: { id },
      data: updateDoctorDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.doctor.delete({ where: { id } });
  }
}
