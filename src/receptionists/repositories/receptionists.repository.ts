import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateReceptionistDto } from './../dto/update-receptionist.dto';
import { CreateReceptionistDto } from './../dto/create-receptionist.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceptionistsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createReceptionistDto: CreateReceptionistDto) {
    return this.prismaService.receptionist.create({
      data: createReceptionistDto,
    });
  }

  public async findAll() {
    return this.prismaService.receptionist.findMany();
  }

  public async findOne(id: number) {
    return this.prismaService.receptionist.findUnique({ where: { id } });
  }

  public async update(
    id: number,
    updateReceptionistDto: UpdateReceptionistDto,
  ) {
    return this.prismaService.receptionist.update({
      where: { id },
      data: updateReceptionistDto,
    });
  }

  public async remove(id: number) {
    return this.prismaService.receptionist.delete({ where: { id } });
  }
}
