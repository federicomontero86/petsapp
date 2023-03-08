import {
  Controller,
  Get,
  Param,
  Post,
  // Body,
  ParseUUIDPipe,
  Patch,
  Delete,
} from '@nestjs/common';
// import { DogsService } from './dogs.service';
// import { CreateDogsDto } from './dto/create-dogs.dto';

@Controller('dogs')
export class DogsController {
  // constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll() {
    return 'This method return all dogs';
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return `This method returns the dog with id ${id}`;
  }

  @Post()
  // create(@Body() createDogsDto: CreateDogsDto)
  create() {
    return 'This method creates a new dog';
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    // @Body() updateDogDto: UpdateDogDto,
  ) {
    return `This method updates the dog with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return `This method deletes the dog with id ${id}`;
  }
}
