import { Cat } from '../interfaces';
import * as Nest from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './../dto';

@Nest.Controller('cats')
export class CatsController {

    constructor (private readonly catsService: CatsService) { ; }

    @Nest.Post()
    create (@Nest.Body() createCatDto: CreateCatDto): void {
        this.catsService.create(createCatDto);
    }

    @Nest.Get()
    findAll (): Cat[] {
        return this.catsService.findAll();
    }

    @Nest.Get(`:name`)
    findOne (@Nest.Param('name') catName: string): Cat {
        return this.catsService.findByName(catName);
    }
}
