import * as Nest from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { CatsModule } from './cats/cats.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { RolesGuard } from './shared/guards/roles.guard';

@Nest.Module({
    imports: [ CatsModule ],
    controllers: [ AppController ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule {}
