import { OpenDocumentType } from 'src/infra/shared/type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('open_document')
export class OpenDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  type: OpenDocumentType;

  @Column({ type: 'text' })
  link: string;

  @Column({ type: 'varchar',nullable:true })
  code: string;

  @Column({type:"int",nullable:true})
  quarter:number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column({ type: 'text' })
  titleUz: string;

  @Column({ type: 'text',nullable:true })
  titleRu: string;

  @Column({ type: 'text',nullable:true })
  titleEn: string;
}
