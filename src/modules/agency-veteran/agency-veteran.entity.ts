import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agency_veteran')
export class AgencyVeteran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'text' })
  nameUz: string;

  @Column({ type: 'text',nullable:true })
  nameRu: string;

  @Column({ type: 'text',nullable:true })
  nameEn: string;

  @Column({ type: 'text' })
  positionUz: string;

  @Column({ type: 'text',nullable:true })
  positionRu: string;

  @Column({ type: 'text',nullable:true })
  positionEn: string;
}
