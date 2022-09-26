import { ReceptionistsRepository } from './repositories/receptionists.repository';
import { Injectable } from '@nestjs/common';
import { CreateReceptionistDto } from './dto/create-receptionist.dto';
import { UpdateReceptionistDto } from './dto/update-receptionist.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ReceptionistsService {
  constructor(
    private readonly receptionistsRepository: ReceptionistsRepository,
  ) {}

  public async create(createReceptionistDto: CreateReceptionistDto) {
    await this.receptionistsRepository.validateReceptionistEmail(
      createReceptionistDto.email,
    );
    createReceptionistDto.password = await bcrypt.hash(
      createReceptionistDto.password,
      10,
    );
    createReceptionistDto.dateOfBirth += 'T00:00:00.000Z';
    return this.receptionistsRepository.create(createReceptionistDto);
  }

  public async findAll() {
    return this.receptionistsRepository.findAll();
  }

  public async findOne(id: number) {
    await this.receptionistsRepository.validateReceptionistId(id);
    return this.receptionistsRepository.findOne(id);
  }

  public async update(
    id: number,
    updateReceptionistDto: UpdateReceptionistDto,
  ) {
    await this.receptionistsRepository.validateReceptionistId(id);
    if (updateReceptionistDto.dateOfBirth)
      updateReceptionistDto.dateOfBirth += 'T00:00:00.000Z';
    if (updateReceptionistDto.email)
      await this.receptionistsRepository.validateReceptionistEmail(
        updateReceptionistDto.email,
        id,
      );
    if (updateReceptionistDto.password)
      updateReceptionistDto.password = await bcrypt.hash(
        updateReceptionistDto.password,
        10,
      );
    return this.receptionistsRepository.update(id, updateReceptionistDto);
  }

  public async remove(id: number) {
    await this.receptionistsRepository.validateReceptionistId(id);
    return this.receptionistsRepository.remove(id);
  }
}
