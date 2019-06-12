import * as Nest from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Nest.Injectable()
export class LoggerMiddleware implements Nest.NestMiddleware {
    use (req: Request, res: Response, next: NextFunction) {
        console.log(`Request...`);
        next();
    }
}
