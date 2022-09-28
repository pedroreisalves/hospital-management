import { CreateMedicalAppointmentDto } from './create-medical-appointment.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateMedicalAppointmentDto extends PartialType(
  CreateMedicalAppointmentDto,
) {}
