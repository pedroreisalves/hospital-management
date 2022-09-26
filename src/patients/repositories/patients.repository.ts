import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from './../dto/create-patient.dto';
import { UpdatePatientDto } from './../dto/update-patient.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PatientsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createPatientDto: CreatePatientDto) {
    return this.prismaService.patient.create({ data: createPatientDto });
  }

  public async findAll() {
    return this.prismaService.patient.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.patient.findUnique({
      where: { id },
      include: {
        bills: true,
        hospitalizations: true,
        medicalAppointments: true,
      },
    });
  }

  public async update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.prismaService.patient.update({
      where: { id },
      data: updatePatientDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.patient.delete({ where: { id } });
  }

  public async validatePatientId(id: number) {
    const patient = await this.prismaService.patient.findUnique({
      where: { id },
    });
    if (!patient) throw new NotFoundException('Patient not found.');
    return id;
  }
}
