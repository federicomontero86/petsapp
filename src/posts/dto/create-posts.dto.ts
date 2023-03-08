import { IsString } from 'class-validator';

export class CreatePostsDto {
  @IsString()
  readonly text: string;
  @IsString()
  readonly userId: string;
}
