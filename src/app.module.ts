import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '../config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { InformationModule } from './modules/information/information.module';
import { DocumentModule } from './modules/document/document.module';
import { VacancyModule } from './modules/vacancy/vacancy.module';
import { ManagementModule } from './modules/management/management.module';
import { InteractiveServiceModule } from './modules/interactive-service/interactive-service.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { AgencyModule } from './modules/agency/agency.module';
import { BannerModule } from './modules/banner/banner.module';
import { CommunicationToolModule } from './modules/communication-tool/communication-tool.module';
import { StatisticModule } from './modules/statistic/statistic.module';
import { UsefulLinkModule } from './modules/useful-link/useful-link.module';

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
    AgencyModule,
    BannerModule,
    CommunicationToolModule,
    DocumentModule,
    GalleryModule,
    InteractiveServiceModule,
    ManagementModule,
    InformationModule,
    StatisticModule,
    UsefulLinkModule,
    UserModule,
    VacancyModule,
  ],
})
export class AppModule {}
