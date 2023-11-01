import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agency')
export class Agency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  url: string;

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

  @Column({ type: 'text' })
  descriptionUz: string;

  @Column({ type: 'text',nullable:true })
  descriptionRu: string;

  @Column({ type: 'text',nullable:true })
  descriptionEn: string;
}
