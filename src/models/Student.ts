import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';
import Class from './Class';

@Entity()
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50, { message: 'Um nome precisa no máximo 50 caracteres' })
  @MinLength(2, { message: 'Nome deve possuir no mínimo 2 caracteres' })
  name: string;

  @Column()
  @Max(9999)
  @Min(1000)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}