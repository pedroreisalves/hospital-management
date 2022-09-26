import { Gender, Nurse } from '@prisma/client';

export class NurseEntity implements Nurse {
  id: number;
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: Gender;
  address: string;
}
