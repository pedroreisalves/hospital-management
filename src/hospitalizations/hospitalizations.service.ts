import { NotFoundError } from './../common/errors/types/NotFoundError';
import { HospitalizationsRepository } from './repositories/hospitalizations.repository';
import { Injectable } from '@nestjs/common';
import { CreateHospitalizationDto } from './dto/create-hospitalization.dto';
import { UpdateHospitalizationDto } from './dto/update-hospitalization.dto';

@Injectable()
export class HospitalizationsService {
  constructor(
    private readonly hospitalizationsRepository: HospitalizationsRepository,
  ) {}

  public async create(createHospitalizationDto: CreateHospitalizationDto) {
    createHospitalizationDto.entryDate += 'T00:00:00.000Z';
    if (createHospitalizationDto.leaveDate)
      createHospitalizationDto.leaveDate += 'T00:00:00.000Z';
    return this.hospitalizationsRepository.create(createHospitalizationDto);
  }

  public async findAll() {
    return this.hospitalizationsRepository.findAll();
  }

  public async findOne(id: number) {
    const hospitalization = await this.hospitalizationsRepository.findOne(id);
    if (!hospitalization) {
      throw new NotFoundError('Hospitalization not found.');
    }
    return hospitalization;
  }

  public async update(
    id: number,
    updateHospitalizationDto: UpdateHospitalizationDto,
  ) {
    await this.findOne(id);
    if (updateHospitalizationDto.entryDate)
      updateHospitalizationDto.entryDate += 'T00:00:00.000Z';
    if (updateHospitalizationDto.leaveDate)
      updateHospitalizationDto.leaveDate += 'T00:00:00.000Z';
    return this.hospitalizationsRepository.update(id, updateHospitalizationDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.hospitalizationsRepository.remove(id);
  }
}
