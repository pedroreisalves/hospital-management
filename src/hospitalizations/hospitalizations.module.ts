import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { HospitalizationsRepository } from './repositories/hospitalizations.repository';
import { Module } from '@nestjs/common';
import { HospitalizationsService } from './hospitalizations.service';
import { HospitalizationsController } from './hospitalizations.controller';

@Module({
  imports: [AuthModule],
  controllers: [HospitalizationsController],
  providers: [
    HospitalizationsRepository,
    HospitalizationsService,
    PrismaService,
  ],
})
export class HospitalizationsModule {}
