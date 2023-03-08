import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entities/cat.entitie';
import { Dog } from 'src/dogs/entities/dog.entitie';
import { Post } from 'src/posts/entities/post.entite';
import { User } from 'src/users/entities/user.entitie';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Root.1234',
        database: 'petsapp',
        entities: [Cat, Dog, Post, User],
        synchronize: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
  ],
})
export class DatabaseModule {}
