import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type:"text"})
  uz: string;

  @Column({ type: 'text' })
  ru: string;

  @Column({ type: 'text' })
  en: string;
}
