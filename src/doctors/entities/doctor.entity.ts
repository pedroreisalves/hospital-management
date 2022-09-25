import { Doctor, Gender } from '@prisma/client';

export class DoctorEntity implements Doctor {
  id: number;
  fullName: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  gender: Gender;
  address: string;
  specialtyId: number;
}
