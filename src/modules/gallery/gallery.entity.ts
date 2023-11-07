import { GalleryType } from 'src/infra/shared/type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gallery')
export class Gallery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: GalleryType;

  @Column({ type: 'jsonb' })
  url: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  descriptionUz: string;

  @Column({ type: 'text',nullable:true })
  descriptionRu: string;

  @Column({ type: 'text',nullable:true })
  descriptionEn: string;
}
