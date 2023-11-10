import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Management } from '../management/management.entity';

@Entity('management_apparatus_type')
export class ManagementApparatusType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  typeUz: string;

  @Column({ type: 'text',nullable:true })
  typeRu: string;

  @Column({ type: 'text',nullable:true })
  typeEn: string;

  @OneToMany(()=>Management, management=>management.apparatusType)
  managementApparatus: Management[]
}
