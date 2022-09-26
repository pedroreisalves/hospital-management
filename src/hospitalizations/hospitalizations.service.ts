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
    const { patientId, roomId } = createHospitalizationDto;
    await this.hospitalizationsRepository.validatePatientId(patientId);
    await this.hospitalizationsRepository.validateRoomId(roomId);
    createHospitalizationDto.entryDate += 'T00:00:00.000Z';
    if (createHospitalizationDto.leaveDate)
      createHospitalizationDto.leaveDate += 'T00:00:00.000Z';
    return this.hospitalizationsRepository.create(createHospitalizationDto);
  }

  public async findAll() {
    return this.hospitalizationsRepository.findAll();
  }

  public async findOne(id: number) {
    await this.hospitalizationsRepository.validateHospitalizationId(id);
    return this.hospitalizationsRepository.findOne(id);
  }

  public async update(
    id: number,
    updateHospitalizationDto: UpdateHospitalizationDto,
  ) {
    const { patientId, roomId } = updateHospitalizationDto;
    await this.hospitalizationsRepository.validateHospitalizationId(id);
    if (patientId)
      await this.hospitalizationsRepository.validatePatientId(patientId);
    if (roomId) await this.hospitalizationsRepository.validateRoomId(roomId);
    if (updateHospitalizationDto.entryDate)
      updateHospitalizationDto.entryDate += 'T00:00:00.000Z';
    if (updateHospitalizationDto.leaveDate)
      updateHospitalizationDto.leaveDate += 'T00:00:00.000Z';
    return this.hospitalizationsRepository.update(id, updateHospitalizationDto);
  }

  public async remove(id: number) {
    await this.hospitalizationsRepository.validateHospitalizationId(id);
    return this.hospitalizationsRepository.remove(id);
  }
}
