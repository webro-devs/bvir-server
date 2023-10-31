import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;
}
