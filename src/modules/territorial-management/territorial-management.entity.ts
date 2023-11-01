import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TerritorialDivision } from '../territorial-division/territorial-division.entity';

@Entity('territorial_management')
export class TerritorialManagement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text', nullable:true })
  phone: string;

  @Column({ type: 'text', nullable:true })
  gmail: string;

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
  firstNameUz: string;

  @Column({type:"text", nullable:true})
  firstNameRu: string;

  @Column({type:"text", nullable:true})
  firstNameEn: string;

  @Column({type:"text"})
  lastNameUz: string;

  @Column({type:"text", nullable:true})
  lastNameRu: string;

  @Column({type:"text", nullable:true})
  lastNameEn: string;

  @Column({type:"text"})
  fatherNameUz: string;

  @Column({type:"text", nullable:true})
  fatherNameRu: string;

  @Column({type:"text", nullable:true})
  fatherNameEn: string;

  @Column({type:"text"})
  positionUz: string;

  @Column({type:"text", nullable:true})
  positionRu: string;

  @Column({type:"text", nullable:true})
  positionEn: string;

  @ManyToOne(()=>TerritorialDivision, tr=>tr.territorialManagements,{
    onDelete:"CASCADE",
    cascade:true
  })
  @JoinColumn()
  territorialDivision:TerritorialDivision
}
