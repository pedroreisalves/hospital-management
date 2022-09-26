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
    const { doctorId, patientId } = createMedicalAppointmentDto;
    await this.medicalAppointmentsRepository.validateForeignKeys(
      doctorId,
      patientId,
    );
    createMedicalAppointmentDto.date += 'T00:00:00.000Z';
    return this.medicalAppointmentsRepository.create(
      createMedicalAppointmentDto,
    );
  }

  public async update(
    id: number,
    updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ) {
    const { doctorId, patientId, date } = updateMedicalAppointmentDto;
    await this.medicalAppointmentsRepository.validateMedicalAppointmentId(id);
    if (doctorId)
      await this.medicalAppointmentsRepository.validateDoctorId(doctorId);
    if (patientId)
      await this.medicalAppointmentsRepository.validatePatientId(patientId);
    if (date) updateMedicalAppointmentDto.date += 'T00:00:00.000Z';
    return this.medicalAppointmentsRepository.update(
      id,
      updateMedicalAppointmentDto,
    );
  }

  public async remove(id: number) {
    await this.medicalAppointmentsRepository.validateMedicalAppointmentId(id);
    return this.medicalAppointmentsRepository.remove(id);
  }
}
