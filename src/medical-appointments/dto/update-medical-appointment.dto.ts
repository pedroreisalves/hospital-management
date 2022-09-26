import { CreateMedicalAppointmentDto } from './create-medical-appointment.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMedicalAppointmentDto extends PartialType(
  CreateMedicalAppointmentDto,
) {}
