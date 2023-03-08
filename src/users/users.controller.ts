import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return 'This method return all users';
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return `This method returns the user with id ${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    // @Body() updateUserDto: UpdateUserDto,
  ) {
    return `This method updates the user with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return `This method deletes the user with id ${id}`;
  }
}
