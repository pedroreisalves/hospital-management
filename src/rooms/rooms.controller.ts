import { RoomEntity } from './entities/room.entity';
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
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rooms')
@ApiTags('Rooms')
@UseGuards(AuthGuard('jwt'))
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  public async create(
    @Body() createRoomDto: CreateRoomDto,
  ): Promise<RoomEntity> {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  public async findAll(): Promise<RoomEntity[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<RoomEntity> {
    return this.roomsService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<RoomEntity> {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.roomsService.remove(+id);
    return { message: `Room with ID #${id} has been removed.` };
  }
}
