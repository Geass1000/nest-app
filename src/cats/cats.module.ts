import * as Nest from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Nest.Module({
    controllers: [ CatsController, ],
    providers: [ CatsService, ],
})
export class CatsModule {
}
