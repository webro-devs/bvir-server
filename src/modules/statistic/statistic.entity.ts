import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('statistic')
export class Statistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  link: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;
}
