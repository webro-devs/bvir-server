import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vacancy')
export class Vacancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({type:"boolean", default:true})
  isActive:boolean = true

  @Column({ type: 'text'})
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;

  @Column({type:"text"})
  salaryUz: string;

  @Column({type:"text",nullable:true})
  salaryRu: string;

  @Column({type:"text",nullable:true})
  salaryEn: string;

  @Column({ type: 'text' })
  descriptionUz: string;

  @Column({ type: 'text',nullable:true })
  descriptionRu: string;

  @Column({ type: 'text',nullable:true })
  descriptionEn: string;
}
