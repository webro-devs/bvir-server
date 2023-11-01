import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('communication_tool')
export class CommunicationTool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'text' })
  mapLink: string;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  callCenter: string;

  @Column({ type: 'text' })
  addressUz: string;

  @Column({ type: 'text',nullable:true })
  addressRu: string;

  @Column({ type: 'text',nullable:true })
  addressEn: string;

  @Column({ type: 'text' })
  workOrderUz: string;

  @Column({ type: 'text',nullable:true })
  workOrderRu: string;

  @Column({ type: 'text',nullable:true })
  workOrderEn: string;
}
