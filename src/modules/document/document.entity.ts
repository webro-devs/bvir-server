import { DocumentType } from 'src/infra/shared/type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('document')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: DocumentType;

  @Column({ type: 'text' })
  link: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;
}
