import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Information } from '../information/information.entity';
import { Agency } from '../agency/agency.entity';

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

  @OneToOne(()=>Information, info=>info.title,{
    onDelete:"CASCADE",
    cascade:true
  })
  @JoinColumn()
  informationTitle:Information

  @OneToOne(()=>Information, info=>info.description,{
    onDelete:"CASCADE",
    cascade:true
  })
  @JoinColumn()
  informationDescription:Information

  @OneToOne(()=>Agency, agency=>agency.title,{
    onDelete:"CASCADE",
    cascade:true
  })
  @JoinColumn()
  agencyTitle:Information

  @OneToOne(()=>Agency, agency=>agency.description,{
    onDelete:"CASCADE",
    cascade:true
  })
  @JoinColumn()
  agencyDescription:Information
}
