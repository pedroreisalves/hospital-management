import { PartialType } from '@nestjs/swagger';
import { CreateReceptionistDto } from './create-receptionist.dto';

export class UpdateReceptionistDto extends PartialType(CreateReceptionistDto) {}
