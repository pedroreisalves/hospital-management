import { Specialty } from '@prisma/client';

export class SpecialtyEntity implements Specialty {
  id: number;
  title: string;
}
