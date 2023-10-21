import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vacancy')
export class Vacancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column('varchar')
  price: string;

  @Column({ type: 'text' })
  startTime: string;

  @Column({ type: 'text' })
  endTime: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({type:"boolean", default:true})
  isActive:boolean = true

  @Column({ type: 'text' })
  description: string;
}
