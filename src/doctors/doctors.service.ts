import { NotFoundError } from './../common/errors/types/NotFoundError';
import { DoctorsRepository } from './repositories/doctors.repository';
import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DoctorsService {
  constructor(private readonly doctorsRepostory: DoctorsRepository) {}

  public async create(createDoctorDto: CreateDoctorDto) {
    createDoctorDto.dateOfBirth += 'T00:00:00.000Z';
    createDoctorDto.password = await bcrypt.hash(createDoctorDto.password, 10);
    return this.doctorsRepostory.create(createDoctorDto);
  }

  public async findAll() {
    return this.doctorsRepostory.findAll();
  }

  public async findOne(id: number) {
    const doctor = await this.doctorsRepostory.findOne(id);
    if (!doctor) throw new NotFoundError('Doctor not found.');
    return doctor;
  }

  public async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    await this.findOne(id);
    if (updateDoctorDto.password)
      updateDoctorDto.password = await bcrypt.hash(
        updateDoctorDto.password,
        10,
      );
    if (updateDoctorDto.dateOfBirth)
      updateDoctorDto.dateOfBirth += 'T00:00:00.000Z';
    return this.doctorsRepostory.update(id, updateDoctorDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.doctorsRepostory.remove(id);
  }
}
