import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsidy_information')
export class SubsidyInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  link: string;

  @Column({ type: 'varchar' })
  year: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;
}
