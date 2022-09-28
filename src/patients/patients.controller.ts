import { PatientEntity } from './entities/patient.entity';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('patients')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  public async create(
    @Body() createPatientDto: CreatePatientDto,
  ): Promise<PatientEntity> {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  public async findAll(): Promise<PatientEntity[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PatientEntity> {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ): Promise<PatientEntity> {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.patientsService.remove(+id);
    return { message: `Patient with ID #${id} has been removed.` };
  }
}
