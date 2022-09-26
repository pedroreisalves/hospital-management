import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalizationDto } from './create-hospitalization.dto';

export class UpdateHospitalizationDto extends PartialType(CreateHospitalizationDto) {}
