import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('management')
export class Management {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: string;

  @Column({ type: 'text' })
  avatar: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  position: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'text' })
  gmail: string;

  @Column({ type: 'text' })
  description: string;
}
