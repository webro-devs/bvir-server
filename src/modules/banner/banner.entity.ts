import { BannerType } from 'src/infra/shared/type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  type: BannerType;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;

  @Column({ type: 'text' })
  descriptionUz: string;

  @Column({ type: 'text',nullable:true })
  descriptionRu: string;

  @Column({ type: 'text',nullable:true })
  descriptionEn: string;
}
