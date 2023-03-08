import {
  // Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
// import { PostsService } from './posts.service';
// import { CreatePostsDto } from './dto/create-posts.dto';

@Controller('posts')
export class PostsController {
  // constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return 'This method returns all posts';
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return `This method returns the post with id ${id}`;
  }

  @Post()
  // create(@Body() createPostsDto: CreatePostsDto)
  create() {
    return 'This method creates a new dog';
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    // @Body() updatePostDto: UpdatePostDto,
  ) {
    return `This method updates the post with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return `This method deletes the post with id ${id}`;
  }
}
