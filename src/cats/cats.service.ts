import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './entities/cat.entitie';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatsDto, UpdateCatDto } from './dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catRepository.findOneBy({ id });
    if (!cat) throw new NotFoundException(`Cat with id ${id} not found!`);
    return cat;
  }

  async create(createCatsDto: CreateCatsDto) {
    const cat = this.catRepository.create(createCatsDto);
    await this.catRepository.save(cat);
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepository.preload({
      id: id,
      ...updateCatDto,
    });
    if (!cat) throw new NotFoundException(`Cat with id: ${id} not found!`);
    await this.catRepository.save(cat);
    return cat;
  }

  async remove(id: string): Promise<void> {
    await this.catRepository.delete(id);
  }
}
