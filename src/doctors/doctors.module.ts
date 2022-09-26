import { AuthModule } from './../auth/auth.module';
import { PrismaService } from './../prisma/prisma.service';
import { DoctorsRepository } from './repositories/doctors.repository';
import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';

@Module({
  imports: [AuthModule],
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorsRepository, PrismaService],
})
export class DoctorsModule {}
