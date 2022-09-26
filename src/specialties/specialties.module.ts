import { SpecialtiesRepository } from './repositories/specialties.repository';
import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesController } from './specialties.controller';

@Module({
  imports: [AuthModule],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesRepository, SpecialtiesService, PrismaService],
})
export class SpecialtiesModule {}
