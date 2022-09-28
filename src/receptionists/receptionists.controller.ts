import { ReceptionistEntity } from './entities/receptionist.entity';
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
import { ReceptionistsService } from './receptionists.service';
import { CreateReceptionistDto } from './dto/create-receptionist.dto';
import { UpdateReceptionistDto } from './dto/update-receptionist.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('receptionists')
@ApiTags('Receptionists')
@UseGuards(AuthGuard('jwt'))
export class ReceptionistsController {
  constructor(private readonly receptionistsService: ReceptionistsService) {}

  @Post()
  public async create(
    @Body() createReceptionistDto: CreateReceptionistDto,
  ): Promise<ReceptionistEntity> {
    return this.receptionistsService.create(createReceptionistDto);
  }

  @Get()
  public async findAll(): Promise<ReceptionistEntity[]> {
    return this.receptionistsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<ReceptionistEntity> {
    return this.receptionistsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateReceptionistDto: UpdateReceptionistDto,
  ): Promise<ReceptionistEntity> {
    return this.receptionistsService.update(+id, updateReceptionistDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.receptionistsService.remove(+id);
    return { message: `Receptionist with ID #${id} has been removed.` };
  }
}
