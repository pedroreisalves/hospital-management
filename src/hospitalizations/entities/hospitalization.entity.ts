import { Hospitalization } from '@prisma/client';

export class HospitalizationEntity implements Hospitalization {
  id: number;
  entryDate: Date;
  leaveDate: Date;
  patientId: number;
  roomId: number;
}
