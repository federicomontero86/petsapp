import { User } from 'src/users/entities/user.entitie';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  color: string;
  @Column()
  breed: string;

  @CreateDateColumn()
  createdAt: number;
  @UpdateDateColumn()
  updatedAt?: number;

  @ManyToOne(() => User, (user) => user.dogs, { onDelete: 'CASCADE' })
  user: User;
}
