import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMedicalAppointmentDto } from './../dto/update-medical-appointment.dto';
import { CreateMedicalAppointmentDto } from './../dto/create-medical-appointment.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

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

  public async validateDoctorId(id: number) {
    const doctor = await this.prismaService.doctor.findUnique({
      where: { id },
    });
    if (!doctor) throw new NotFoundException('Doctor not found.');
    return id;
  }

  public async validatePatientId(id: number) {
    const patient = await this.prismaService.patient.findUnique({
      where: { id },
    });
    if (!patient) throw new NotFoundException('Patient not found.');
    return id;
  }

  public async validateForeignKeys(doctorId: number, patientId: number) {
    await this.validateDoctorId(doctorId);
    await this.validatePatientId(patientId);
    return { doctorId, patientId };
  }

  public async validateMedicalAppointmentId(id: number) {
    const medicalAppointment =
      await this.prismaService.medicalAppointment.findUnique({ where: { id } });
    if (!medicalAppointment)
      throw new NotFoundException('Medical appointment not found.');
    return id;
  }
}
