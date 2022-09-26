import { PartialType } from '@nestjs/mapped-types';
import { CreateNurseDto } from './create-nurse.dto';

export class UpdateNurseDto extends PartialType(CreateNurseDto) {}
