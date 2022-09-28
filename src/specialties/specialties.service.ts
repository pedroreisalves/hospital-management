import { SpecialtiesRepository } from './repositories/specialties.repository';
import { Injectable } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Injectable()
export class SpecialtiesService {
  constructor(private readonly specialtiesRepository: SpecialtiesRepository) {}

  public async create(createSpecialtyDto: CreateSpecialtyDto) {
    return this.specialtiesRepository.create(createSpecialtyDto);
  }

  public async findAll() {
    return this.specialtiesRepository.findAll();
  }

  public async findOne(id: number) {
    const specialty = await this.specialtiesRepository.findOne(id);
    if (!specialty) throw new Error('Specialty not found.');
    return specialty;
  }

  public async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    await this.findOne(id);
    return this.specialtiesRepository.update(id, updateSpecialtyDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.specialtiesRepository.remove(id);
  }
}
