import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  public async login(@Body() loginDto: LoginDto) {
    const token = await this.loginService.login(loginDto);
    return { token };
  }
}
