import { IsInt, Min, IsString, MinLength } from 'class-validator';

export class CreateDogsDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(0)
  readonly age: number;

  @MinLength(3)
  @IsString()
  readonly color: string;

  @IsString()
  readonly breed: string;
}
