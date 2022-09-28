import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMedicalAppointmentDto } from './../dto/update-medical-appointment.dto';
import { CreateMedicalAppointmentDto } from './../dto/create-medical-appointment.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalAppointmentsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(
    createMedicalAppointmentDto: CreateMedicalAppointmentDto,
  ) {
    return this.prismaService.medicalAppointment.create({
      data: createMedicalAppointmentDto,
    });
  }

  public async update(
    id: number,
    updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ) {
    return this.prismaService.medicalAppointment.update({
      where: { id },
      data: updateMedicalAppointmentDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.medicalAppointment.delete({ where: { id } });
  }

  public async findOne(id: number) {
    return this.prismaService.medicalAppointment.findUnique({ where: { id } });
  }
}
