import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from '../language/language.entity';

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

  @OneToOne(()=>Language, lang=>lang.agencyTitle)
  title: Language;

  @OneToOne(()=>Language, lang=>lang.agencyDescription)
  description: Language;
}
