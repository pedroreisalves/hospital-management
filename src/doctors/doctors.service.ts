import { DoctorsRepository } from './repositories/doctors.repository';
import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DoctorsService {
  constructor(private readonly doctorsRepostory: DoctorsRepository) {}

  public async create(createDoctorDto: CreateDoctorDto) {
    await this.doctorsRepostory.validateSpecialtyId(
      createDoctorDto.specialtyId,
    );
    createDoctorDto.dateOfBirth += 'T00:00:00.000Z';
    createDoctorDto.password = await bcrypt.hash(createDoctorDto.password, 10);
    return this.doctorsRepostory.create(createDoctorDto);
  }

  public async findAll() {
    return this.doctorsRepostory.findAll();
  }

  public async findOne(id: number) {
    await this.doctorsRepostory.validateDoctorId(id);
    return this.doctorsRepostory.findOne(id);
  }

  public async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    await this.doctorsRepostory.validateDoctorId(id);
    if (updateDoctorDto.specialtyId)
      await this.doctorsRepostory.validateSpecialtyId(
        updateDoctorDto.specialtyId,
      );
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
    await this.doctorsRepostory.validateDoctorId(id);
    return this.doctorsRepostory.remove(id);
  }
}
