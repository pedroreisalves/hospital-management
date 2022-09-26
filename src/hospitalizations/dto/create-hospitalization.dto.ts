import { IsISO8601, IsNumber, IsOptional } from 'class-validator';

export class CreateHospitalizationDto {
  @IsISO8601()
  entryDate: string;

  @IsISO8601()
  @IsOptional()
  leaveDate?: string;

  @IsNumber()
  patientId: number;

  @IsNumber()
  roomId: number;
}
