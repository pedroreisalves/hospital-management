import { NotFoundError } from './../common/errors/types/NotFoundError';
import { PatientsRepository } from './repositories/patients.repository';
import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  public async create(createPatientDto: CreatePatientDto) {
    createPatientDto.dateOfBirth += 'T00:00:00.000Z';
    return this.patientsRepository.create(createPatientDto);
  }

  public async findAll() {
    return this.patientsRepository.findAll();
  }

  public async findOne(id: number) {
    const patient = await this.patientsRepository.findOne(id);
    if (!patient) throw new NotFoundError('Patient not found.');
    return patient;
  }

  public async update(id: number, updatePatientDto: UpdatePatientDto) {
    await this.findOne(id);
    if (updatePatientDto.dateOfBirth)
      updatePatientDto.dateOfBirth += 'T00:00:00.000Z';
    return this.patientsRepository.update(id, updatePatientDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.patientsRepository.remove(id);
  }
}
