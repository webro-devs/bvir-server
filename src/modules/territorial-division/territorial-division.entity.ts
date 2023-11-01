import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TerritorialManagement } from '../territorial-management/territorial-management.entity';

@Entity('territorial_division')
export class TerritorialDivision {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text', nullable:true })
  phone: string;

  @Column({ type: 'text', nullable:true })
  website: string;

  @Column({ type: 'text', nullable:true })
  telegram: string;

  @Column({ type: 'text', nullable:true })
  facebook: string;

  @Column({ type: 'text', nullable:true })
  twitter: string;

  @Column({ type: 'text' , nullable:true})
  instagram: string;

  @Column({ type: 'text', nullable:true })
  linkedin: string;

  @Column({type:"text"})
  areaUz: string;

  @Column({type:"text", nullable:true})
  areaRu: string;

  @Column({type:"text", nullable:true})
  areaEn: string;

  @Column({type:"text"})
  titleUz: string;

  @Column({type:"text", nullable:true})
  titleRu: string;

  @Column({type:"text", nullable:true})
  titleEn: string;

  @OneToMany(()=>TerritorialManagement, tr=>tr.territorialDivision)
  territorialManagements:TerritorialManagement[]
}
