import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from './models/jwt-payload.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  public async createAccessToken(jwtPayload: JwtPayload): Promise<string> {
    return this.jwtService.sign(jwtPayload);
  }

  public async validateUser(jwtPayload: JwtPayload) {
    const user = await this.prismaService[
      jwtPayload.role.toLowerCase()
    ].findUnique({
      where: { id: jwtPayload.id },
    });
    if (!user) throw new BadRequestException('Token owner invalid.');
    return user;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }

  private static jwtExtractor(request: Request): string {
    const { authorization: token } = request.headers;
    if (!token) {
      throw new NotFoundException('Token not found.');
    }
    return token.split(' ')[1];
  }
}
