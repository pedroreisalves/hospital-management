import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PatientsRepository } from './repositories/patients.repository';

@Module({
  imports: [AuthModule],
  controllers: [PatientsController],
  providers: [PatientsRepository, PatientsService, PrismaService],
})
export class PatientsModule {}
