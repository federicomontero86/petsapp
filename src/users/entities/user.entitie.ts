import { Cat } from 'src/cats/entities/cat.entitie';
import { Dog } from 'src/dogs/entities/dog.entitie';
import { Post } from 'src/posts/entities/post.entite';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  @OneToMany(() => Cat, (cat) => cat.owner, {
    cascade: true,
    eager: true,
  })
  cats?: Cat[];

  @OneToMany(() => Dog, (dog) => dog.user, {
    cascade: true,
    eager: true,
  })
  dogs?: Dog[];

  @OneToMany(() => Post, (post) => post.user, {
    cascade: true,
    eager: true,
  })
  posts?: Post[];
}
