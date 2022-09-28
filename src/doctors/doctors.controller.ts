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
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorEntity } from './entities/doctor.entity';

@Controller('doctors')
@ApiTags('Doctors')
@UseGuards(AuthGuard('jwt'))
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  public async create(
    @Body() createDoctorDto: CreateDoctorDto,
  ): Promise<DoctorEntity> {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  public async findAll(): Promise<DoctorEntity[]> {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<DoctorEntity> {
    return this.doctorsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ): Promise<DoctorEntity> {
    return this.doctorsService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.doctorsService.remove(+id);
    return { message: `Doctor with ID #${id} has been removed.` };
  }
}
