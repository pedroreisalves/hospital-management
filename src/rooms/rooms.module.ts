import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { RoomsRepository } from './repositories/rooms.repository';

@Module({
  imports: [AuthModule],
  controllers: [RoomsController],
  providers: [RoomsRepository, RoomsService, PrismaService],
})
export class RoomsModule {}
