import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('document')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: string;

  @Column({ type: 'text' })
  link: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;
}
