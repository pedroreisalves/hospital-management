import { Bill } from '@prisma/client';

export class BillEntity implements Bill {
  id: number;
  patientId: number;
  amount: number;
  date: Date;
}
