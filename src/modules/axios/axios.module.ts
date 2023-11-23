import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {HttpModule} from '@nestjs/axios'
import { AxiosService } from './axios.service';


@Module({
  imports: [
    HttpModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          timeout: configService.get('HTTP_TIMEOUT'),
          maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
        }),
        inject: [ConfigService],
      }),
  ],
  providers: [AxiosService],
  exports: [AxiosService],
})
export class AxiosModule {}
