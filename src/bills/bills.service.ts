import { BillsRepository } from './repositories/bills.repository';
import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillsService {
  constructor(private readonly billsRepository: BillsRepository) {}

  public async create(createBillDto: CreateBillDto) {
    await this.billsRepository.validatePatientId(createBillDto.patientId);
    createBillDto.date += 'T00:00:00.000Z';
    return this.billsRepository.create(createBillDto);
  }

  public async findAll() {
    return this.billsRepository.findAll();
  }

  public async findOne(id: number) {
    await this.billsRepository.validateBillId(id);
    return this.billsRepository.findOne(id);
  }

  public async update(id: number, updateBillDto: UpdateBillDto) {
    if (updateBillDto.patientId)
      await this.billsRepository.validatePatientId(updateBillDto.patientId);
    if (updateBillDto.date) updateBillDto.date += 'T00:00:00.000Z';
    await this.billsRepository.validateBillId(id);
    return this.billsRepository.update(id, updateBillDto);
  }

  public async remove(id: number) {
    await this.billsRepository.validateBillId(id);
    return this.billsRepository.remove(id);
  }
}
