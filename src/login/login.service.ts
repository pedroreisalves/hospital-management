import { AuthService } from './../auth/auth.service';
import { LoginDto } from './dto/login.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {}

  public async login(loginDto: LoginDto): Promise<string> {
    const id = await this.validateUser(loginDto);
    return this.authService.createAccessToken({ id, role: loginDto.role });
  }

  private async validateUser(loginDto: LoginDto): Promise<number> {
    const emailValidation = await this.prismaService[
      loginDto.role.toLowerCase()
    ].findFirst({
      where: { email: loginDto.email },
    });
    if (!emailValidation) {
      throw new NotFoundException('Invalid email.');
    }
    const match = await bcrypt.compare(
      loginDto.password,
      emailValidation.password,
    );
    if (!match) {
      throw new BadRequestException('Invalid password.');
    }
    return emailValidation.id;
  }
}
