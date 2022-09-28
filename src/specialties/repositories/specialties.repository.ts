import { UpdateSpecialtyDto } from './../dto/update-specialty.dto';
import { CreateSpecialtyDto } from './../dto/create-specialty.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpecialtiesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createSpecialtyDto: CreateSpecialtyDto) {
    return this.prismaService.specialty.create({ data: createSpecialtyDto });
  }

  public async findAll() {
    return this.prismaService.specialty.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.specialty.findUnique({ where: { id } });
  }

  public async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    return this.prismaService.specialty.update({
      data: updateSpecialtyDto,
      where: { id },
    });
  }

  public async remove(id: number) {
    return this.prismaService.specialty.delete({ where: { id } });
  }
}
