import { AuthModule } from './../auth/auth.module';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [AuthModule],
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}
