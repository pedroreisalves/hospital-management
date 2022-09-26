import { Gender, Patient } from '@prisma/client';

export class PatientEntity implements Patient {
  id: number;
  fullName: string;
  dateOfBirth: Date;
  gender: Gender;
  address: string;
}
