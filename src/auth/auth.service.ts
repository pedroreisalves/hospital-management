import { JwtService } from '@nestjs/jwt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from './models/jwt-payload.model';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public async createAccessToken(jwtPayload: JwtPayload): Promise<string> {
    return this.jwtService.sign(jwtPayload);
  }

  public async validateUser(jwtPayload: JwtPayload) {
    return jwtPayload;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }

  private static jwtExtractor(request: Request): string {
    const { authorization: token } = request.headers;
    if (!token) {
      throw new NotFoundException('Token not found');
    }
    return token;
  }
}
