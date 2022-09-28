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
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiTags } from '@nestjs/swagger';
import { BillEntity } from './entities/bill.entity';

@Controller('bills')
@ApiTags('Bills')
@UseGuards(AuthGuard('jwt'))
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  public async create(
    @Body() createBillDto: CreateBillDto,
  ): Promise<BillEntity> {
    return this.billsService.create(createBillDto);
  }

  @Get()
  public async findAll(): Promise<BillEntity[]> {
    return this.billsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<BillEntity> {
    return this.billsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateBillDto: UpdateBillDto,
  ): Promise<BillEntity> {
    return this.billsService.update(+id, updateBillDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.billsService.remove(+id);
    return { message: `Bill with ID #${id} has been removed.` };
  }
}
