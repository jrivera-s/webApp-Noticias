import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get('say-hello')
  hellousers(): string {
    return this.usersService.hellousers();
  }
}
