import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { User } from './entities/user.entitie';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUsersDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }
}
