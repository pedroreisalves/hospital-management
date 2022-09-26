import { IsISO8601, IsNumber, Min } from 'class-validator';

export class CreateBillDto {
  @IsNumber()
  @Min(1)
  patientId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  amount: number;

  @IsISO8601()
  date: string;
}
