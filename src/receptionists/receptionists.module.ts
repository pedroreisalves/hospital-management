import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReceptionistsRepository } from './repositories/receptionists.repository';
import { Module } from '@nestjs/common';
import { ReceptionistsService } from './receptionists.service';
import { ReceptionistsController } from './receptionists.controller';

@Module({
  imports: [AuthModule],
  controllers: [ReceptionistsController],
  providers: [ReceptionistsRepository, ReceptionistsService, PrismaService],
})
export class ReceptionistsModule {}
