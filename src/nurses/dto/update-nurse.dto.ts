import { PartialType } from '@nestjs/swagger';
import { CreateNurseDto } from './create-nurse.dto';

export class UpdateNurseDto extends PartialType(CreateNurseDto) {}
