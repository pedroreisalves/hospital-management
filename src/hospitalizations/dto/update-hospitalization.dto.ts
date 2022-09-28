import { PartialType } from '@nestjs/swagger';
import { CreateHospitalizationDto } from './create-hospitalization.dto';

export class UpdateHospitalizationDto extends PartialType(CreateHospitalizationDto) {}
