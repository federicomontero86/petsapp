import { IsInt, IsString, IsUUID, Min, MinLength } from 'class-validator';

export class CreateCatsDto {
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

  @IsString()
  @IsUUID()
  readonly owner: string;
}
