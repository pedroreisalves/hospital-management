import { NurseEntity } from './entities/nurse.entity';
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
import { NursesService } from './nurses.service';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('nurses')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}

  @Post()
  public async create(
    @Body() createNurseDto: CreateNurseDto,
  ): Promise<NurseEntity> {
    return this.nursesService.create(createNurseDto);
  }

  @Get()
  public async findAll(): Promise<NurseEntity[]> {
    return this.nursesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<NurseEntity> {
    return this.nursesService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateNurseDto: UpdateNurseDto,
  ): Promise<NurseEntity> {
    return this.nursesService.update(+id, updateNurseDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.nursesService.remove(+id);
    return { message: `Nurse with ID #${id} has been removed.` };
  }
}
