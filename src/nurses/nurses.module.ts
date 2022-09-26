import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { NursesRepository } from './repositories/nurses.repository';
import { Module } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { NursesController } from './nurses.controller';

@Module({
  imports: [AuthModule],
  controllers: [NursesController],
  providers: [NursesRepository, NursesService, PrismaService],
})
export class NursesModule {}
