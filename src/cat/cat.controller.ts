import * as Nest from '@nestjs/common';
import { CreateCatDto } from './../dto';

@Nest.Controller('cat')
export class CatController {
    @Nest.Post()
    create (@Nest.Body() createCatDor: CreateCatDto): string {
        return 'This action adds a new cat';
    }

    @Nest.Get()
    findAll (): string {
        return 'This action returns all cats';
    }

    @Nest.Get(`:id`)
    findOne (@Nest.Param('id') id: string): string {
        return `This action returns cat with ID ${id}`;
    }
}
