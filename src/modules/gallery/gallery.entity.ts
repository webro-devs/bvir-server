import { GalleryTypeEnum } from 'src/infra/shared/enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gallery')
export class Gallery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: GalleryTypeEnum;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  description: string;
}
