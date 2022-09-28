import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  public async login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    const token = await this.loginService.login(loginDto);
    return { token };
  }
}
