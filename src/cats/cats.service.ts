import * as Nest from '@nestjs/common';
import * as _ from 'lodash';

import { Cat } from '../interfaces';

@Nest.Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    public create (cat: Cat) {
        this.cats.push(cat);
    }

    public findAll (): Cat[] {
        return this.cats;
    }

    public findByName (name: string): Cat {
        return _.find(this.cats, [ 'name', name ]);
    }
}
