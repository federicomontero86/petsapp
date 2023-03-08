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
export class Cat {
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
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.cats, { onDelete: 'CASCADE' })
  owner: string;
}
