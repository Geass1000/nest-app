import * as Nest from '@nestjs/common';
import { LoggerMiddleware } from './../shared/middlewares';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Nest.Module({
    controllers: [ CatsController, ],
    providers: [ CatsService, ],
})
export class CatsModule implements Nest.NestModule {
    public configure (consumer: Nest.MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware)
            .forRoutes(CatsController);
    }
}
