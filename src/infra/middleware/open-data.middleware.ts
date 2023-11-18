import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

@Injectable()
class OpenDataQueryParserMiddleware implements NestMiddleware {
  use(req, res: Response, next: NextFunction) {
    let where: any = {};
    const { quarter } = req.query;
    
    if(quarter){
        where.quarter = +quarter
    }

    req.where = where;
    next();
  }
}

export default OpenDataQueryParserMiddleware;
