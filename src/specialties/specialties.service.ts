import { SpecialtiesRepository } from './repositories/specialties.repository';
import { Injectable } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Injectable()
export class SpecialtiesService {
  constructor(private readonly specialtiesRepository: SpecialtiesRepository) {}

  public async create(createSpecialtyDto: CreateSpecialtyDto) {
    await this.specialtiesRepository.validateSpecialtyTitle(
      createSpecialtyDto.title,
    );
    return this.specialtiesRepository.create(createSpecialtyDto);
  }

  public async findAll() {
    return this.specialtiesRepository.findAll();
  }

  public async findOne(id: number) {
    await this.specialtiesRepository.validateSpecialtyId(id);
    return this.specialtiesRepository.findOne(id);
  }

  public async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    await this.specialtiesRepository.validateSpecialtyId(id);
    if (updateSpecialtyDto.title)
      await this.specialtiesRepository.validateSpecialtyTitle(
        updateSpecialtyDto.title,
      );
    return this.specialtiesRepository.update(id, updateSpecialtyDto);
  }

  public async remove(id: number) {
    await this.specialtiesRepository.validateSpecialtyId(id);
    return this.specialtiesRepository.remove(id);
  }
}
