import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agency_statistic')
export class AgencyStatistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  uderReview: number;

  @Column({ type: 'int' })
  rejected: number;

  @Column({ type: 'int'})
  solved: number;

  @Column({ type: 'int' })
  detachedLandArea: number;

  @Column({ type: 'int' })
  allocatedSubsidies: number;

  @Column({ type: 'int' })
  greenhouseSubsidies: number;
}
