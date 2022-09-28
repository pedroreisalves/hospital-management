import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateNurseDto } from '../dto/create-nurse.dto';
import { UpdateNurseDto } from '../dto/update-nurse.dto';

@Injectable()
export class NursesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createNurseDto: CreateNurseDto) {
    return this.prismaService.nurse.create({ data: createNurseDto });
  }

  public async findAll() {
    return this.prismaService.nurse.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.nurse.findUnique({ where: { id } });
  }

  public async update(id: number, updateNurseDto: UpdateNurseDto) {
    return this.prismaService.nurse.update({
      where: { id },
      data: updateNurseDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.nurse.delete({ where: { id } });
  }
}
