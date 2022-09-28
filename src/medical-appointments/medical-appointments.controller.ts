import { MedicalAppointmentEntity } from './entities/medical-appointment.entity';
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
import { ApiTags } from '@nestjs/swagger';

@Controller('medical-appointments')
@ApiTags('Medical appointments')
@UseGuards(AuthGuard('jwt'))
export class MedicalAppointmentsController {
  constructor(
    private readonly medicalAppointmentsService: MedicalAppointmentsService,
  ) {}

  @Post()
  public async create(
    @Body() createMedicalAppointmentDto: CreateMedicalAppointmentDto,
  ): Promise<MedicalAppointmentEntity> {
    return this.medicalAppointmentsService.create(createMedicalAppointmentDto);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateMedicalAppointmentDto: UpdateMedicalAppointmentDto,
  ): Promise<MedicalAppointmentEntity> {
    return this.medicalAppointmentsService.update(
      +id,
      updateMedicalAppointmentDto,
    );
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.medicalAppointmentsService.remove(+id);
    return { message: `Medical appointment with ID #${id} has been removed.` };
  }
}
