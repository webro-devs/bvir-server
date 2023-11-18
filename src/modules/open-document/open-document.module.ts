import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OpenDocument } from './open-document.entity';
import { OpenDocumentService } from './open-document.service';
import { OpenDocumentController } from './open-document.controller';
import { OpenDataQueryParserMiddleware } from 'src/infra/middleware';

@Module({
  imports: [TypeOrmModule.forFeature([OpenDocument])],
  controllers: [OpenDocumentController],
  providers: [OpenDocumentService],
  exports: [OpenDocumentService],
})
export class OpenDocumentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(OpenDataQueryParserMiddleware)
      .forRoutes(
        { path: '/open-document/budget-legislation', method: RequestMethod.GET },
        { path: '/open-document/organizations-included', method: RequestMethod.GET },
        { path: '/open-document/fp', method: RequestMethod.GET },
        { path: '/open-document', method: RequestMethod.GET },
      );
  }
}
