import { Gender, Receptionist } from '@prisma/client';

export class ReceptionistEntity implements Receptionist {
  id: number;
  fullName: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  gender: Gender;
  address: string;
}
