import { IsISO8601, IsNumber, Min } from 'class-validator';

export class CreateMedicalAppointmentDto {
  @IsNumber()
  @Min(1)
  doctorId: number;

  @IsNumber()
  @Min(1)
  patientId: number;

  @IsISO8601()
  date: string;
}
