import { NotFoundError } from './../common/errors/types/NotFoundError';
import { MedicalAppointmentsRepository } from './repositories/medical-appointments.repository';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalAppointmentsService {
  constructor(
    private readonly medicalAppointmentsRepository: MedicalAppointmentsRepository,
  ) {}

  public async create(
    createMedicalAppointmentDto: CreateMedicalAppointmentDto,
  ) {
    createMedicalAppointmentDto.date += 'T00:00:00.000Z';
    return this.medicalAppointmentsRepository.create(
      createMedicalAppointmentDto,
    );
  }

  public async update(
    id: number,
    updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ) {
    const { date } = updateMedicalAppointmentDto;
    await this.findOne(id);
    if (date) updateMedicalAppointmentDto.date += 'T00:00:00.000Z';
    return this.medicalAppointmentsRepository.update(
      id,
      updateMedicalAppointmentDto,
    );
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.medicalAppointmentsRepository.remove(id);
  }

  private async findOne(id: number) {
    const medicalAppointment = await this.medicalAppointmentsRepository.findOne(
      id,
    );
    if (!medicalAppointment)
      throw new NotFoundError('Medical appointment not found.');
    return medicalAppointment;
  }
}
