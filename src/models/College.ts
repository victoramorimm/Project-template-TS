import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Institution from './Institution';

@Entity()
export default class College extends Institution{
  @Column()
  graduations: string;
}