import { AuthModule } from './../auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { BillsRepository } from './repositories/bills.repository';
import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';

@Module({
  imports: [AuthModule],
  controllers: [BillsController],
  providers: [BillsRepository, BillsService, PrismaService],
})
export class BillsModule {}
