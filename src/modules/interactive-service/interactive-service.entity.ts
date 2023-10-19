import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('interactive_service')
export class InteractiveService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar'})
  url: string;
}
