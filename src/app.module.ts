import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '../config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { NewsModule } from './modules/news/news.module';
import { DocumentModule } from './modules/document/document.module';
import { VacancyModule } from './modules/vacancy/vacancy.module';
import { ManagementModule } from './modules/management/management.module';
import { InteractiveServiceModule } from './modules/interactive-service/interactive-service.module';
import { GalleryModule } from './modules/gallery/gallery.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    AuthModule,
    DocumentModule,
    GalleryModule,
    InteractiveServiceModule,
    ManagementModule,
    NewsModule,
    UserModule,
    VacancyModule,
  ],
})
export class AppModule {}
