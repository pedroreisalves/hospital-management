import { SpecialtyEntity } from './entities/specialty.entity';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('specialties')
@ApiTags('Specialties')
@UseGuards(AuthGuard('jwt'))
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Post()
  public async create(
    @Body() createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<SpecialtyEntity> {
    return this.specialtiesService.create(createSpecialtyDto);
  }

  @Get()
  public async findAll(): Promise<SpecialtyEntity[]> {
    return this.specialtiesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<SpecialtyEntity> {
    return this.specialtiesService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<SpecialtyEntity> {
    return this.specialtiesService.update(+id, updateSpecialtyDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.specialtiesService.remove(+id);
    return { message: `Specialty with ID #${id} has been removed.` };
  }
}
