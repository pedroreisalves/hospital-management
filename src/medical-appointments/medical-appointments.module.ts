import { AuthModule } from './../auth/auth.module';
import { MedicalAppointmentsRepository } from './repositories/medical-appointments.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MedicalAppointmentsService } from './medical-appointments.service';
import { MedicalAppointmentsController } from './medical-appointments.controller';

@Module({
  imports: [AuthModule],
  controllers: [MedicalAppointmentsController],
  providers: [
    MedicalAppointmentsRepository,
    MedicalAppointmentsService,
    PrismaService,
  ],
})
export class MedicalAppointmentsModule {}
