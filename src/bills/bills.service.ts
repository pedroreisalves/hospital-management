import { NotFoundError } from './../common/errors/types/NotFoundError';
import { BillsRepository } from './repositories/bills.repository';
import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillsService {
  constructor(private readonly billsRepository: BillsRepository) {}

  public async create(createBillDto: CreateBillDto) {
    createBillDto.date += 'T00:00:00.000Z';
    return this.billsRepository.create(createBillDto);
  }

  public async findAll() {
    return this.billsRepository.findAll();
  }

  public async findOne(id: number) {
    const bill = await this.billsRepository.findOne(id);
    if (!bill) throw new NotFoundError('Bill not found.');
    return bill;
  }

  public async update(id: number, updateBillDto: UpdateBillDto) {
    await this.findOne(id);
    if (updateBillDto.date) updateBillDto.date += 'T00:00:00.000Z';
    return this.billsRepository.update(id, updateBillDto);
  }

  public async remove(id: number) {
    await this.findOne(id);
    return this.billsRepository.remove(id);
  }
}
