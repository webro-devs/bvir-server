import { InformationType } from 'src/infra/shared/type';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from '../language/language.entity';

@Entity('information')
export class Information {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  type: InformationType;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @OneToOne(()=>Language, lang=>lang.informationTitle)
  title: Language;

  @OneToOne(()=>Language, lang=>lang.informationDescription)
  description: Language;
}
