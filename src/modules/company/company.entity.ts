import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  url: string;
  
  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;
}
