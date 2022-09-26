import { UpdateSpecialtyDto } from './../dto/update-specialty.dto';
import { CreateSpecialtyDto } from './../dto/create-specialty.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

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
    return this.prismaService.specialty.findUnique({
      where: { id },
      include: { doctors: true },
    });
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

  public async validateSpecialtyId(id: number) {
    const specialty = await this.prismaService.specialty.findUnique({
      where: { id },
    });
    if (!specialty) throw new NotFoundException('Specialty not found.');
    return id;
  }

  public async validateSpecialtyTitle(title: string) {
    const specialty = await this.prismaService.specialty.findUnique({
      where: { title },
    });
    if (specialty)
      throw new NotFoundException(
        'A specialty with that title already exists.',
      );
    return title;
  }
}
