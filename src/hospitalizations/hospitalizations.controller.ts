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
import { HospitalizationsService } from './hospitalizations.service';
import { CreateHospitalizationDto } from './dto/create-hospitalization.dto';
import { UpdateHospitalizationDto } from './dto/update-hospitalization.dto';
import { ApiTags } from '@nestjs/swagger';
import { HospitalizationEntity } from './entities/hospitalization.entity';

@Controller('hospitalizations')
@ApiTags('Hospitalizations')
@UseGuards(AuthGuard('jwt'))
export class HospitalizationsController {
  constructor(
    private readonly hospitalizationsService: HospitalizationsService,
  ) {}

  @Post()
  public async create(
    @Body() createHospitalizationDto: CreateHospitalizationDto,
  ): Promise<HospitalizationEntity> {
    return this.hospitalizationsService.create(createHospitalizationDto);
  }

  @Get()
  public async findAll(): Promise<HospitalizationEntity[]> {
    return this.hospitalizationsService.findAll();
  }

  @Get(':id')
  public async findOne(
    @Param('id') id: string,
  ): Promise<HospitalizationEntity> {
    return this.hospitalizationsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateHospitalizationDto: UpdateHospitalizationDto,
  ): Promise<HospitalizationEntity> {
    return this.hospitalizationsService.update(+id, updateHospitalizationDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.hospitalizationsService.remove(+id);
    return { message: `Hospitalization with ID #${id} has been removed.` };
  }
}
