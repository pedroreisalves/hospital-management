import { MedicalAppointment } from '@prisma/client';

export class MedicalAppointmentEntity implements MedicalAppointment {
  id: number;
  doctorId: number;
  patientId: number;
  date: Date;
}
