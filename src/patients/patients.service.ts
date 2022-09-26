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
    await this.patientsRepository.validatePatientId(id);
    return this.patientsRepository.findOne(id);
  }

  public async update(id: number, updatePatientDto: UpdatePatientDto) {
    await this.patientsRepository.validatePatientId(id);
    if (updatePatientDto.dateOfBirth)
      updatePatientDto.dateOfBirth += 'T00:00:00.000Z';
    return this.patientsRepository.update(id, updatePatientDto);
  }

  public async remove(id: number) {
    await this.patientsRepository.validatePatientId(id);
    return this.patientsRepository.remove(id);
  }
}
