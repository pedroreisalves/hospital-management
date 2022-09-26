import { NursesRepository } from './repositories/nurses.repository';
import { Injectable } from '@nestjs/common';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class NursesService {
  constructor(private readonly nursesRepository: NursesRepository) {}

  public async create(createNurseDto: CreateNurseDto) {
    createNurseDto.dateOfBirth += 'T00:00:00.000Z';
    createNurseDto.password = await bcrypt.hash(createNurseDto.password, 10);
    await this.nursesRepository.validateNurseEmail(createNurseDto.email);
    return this.nursesRepository.create(createNurseDto);
  }

  public async findAll() {
    return this.nursesRepository.findAll();
  }

  public async findOne(id: number) {
    await this.nursesRepository.validateNurseId(id);
    return this.nursesRepository.findOne(id);
  }

  public async update(id: number, updateNurseDto: UpdateNurseDto) {
    await this.nursesRepository.validateNurseId(id);
    if (updateNurseDto.email)
      await this.nursesRepository.validateNurseEmail(updateNurseDto.email, id);
    if (updateNurseDto.password)
      updateNurseDto.password = await bcrypt.hash(updateNurseDto.password, 10);
    if (updateNurseDto.dateOfBirth)
      updateNurseDto.dateOfBirth += 'T00:00:00.000Z';
    return this.nursesRepository.update(id, updateNurseDto);
  }

  public async remove(id: number) {
    await this.nursesRepository.validateNurseId(id);
    return this.nursesRepository.remove(id);
  }
}
