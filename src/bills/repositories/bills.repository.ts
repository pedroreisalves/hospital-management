import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';

@Injectable()
export class BillsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createBillDto: CreateBillDto) {
    return this.prismaService.bill.create({ data: createBillDto });
  }

  public async findAll() {
    return this.prismaService.bill.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.bill.findUnique({ where: { id } });
  }

  public async update(id: number, updateBillDto: UpdateBillDto) {
    return this.prismaService.bill.update({
      where: { id },
      data: updateBillDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.bill.delete({ where: { id } });
  }
}
