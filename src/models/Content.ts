import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  linkContent: string;
}