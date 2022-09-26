import { AuthGuard } from '@nestjs/passport';
import { UpdateMedicalAppointmentDto } from './dto/update-medical-appointment.dto';
import { CreateMedicalAppointmentDto } from './dto/create-medical-appointment.dto';
import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';

@Controller('medical-appointments')
@UseGuards(AuthGuard('jwt'))
export class MedicalAppointmentsController {
  constructor(
    private readonly medicalAppointmentsService: MedicalAppointmentsService,
  ) {}

  @Post()
  public async create(
    @Body() createMedicalAppointmentDto: CreateMedicalAppointmentDto,
  ) {
    return this.medicalAppointmentsService.create(createMedicalAppointmentDto);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ) {
    return this.medicalAppointmentsService.update(
      +id,
      updateMedicalAppointmentDto,
    );
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.medicalAppointmentsService.remove(+id);
  }
}
