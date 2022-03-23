import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {}

    @Get('flavors')
    findAll(@Query() paginationQuery){
        // const { limit , offset } = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        const coffee = this.coffeesService.findOne(id);
        if (!coffee) {
            throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
        }
        return coffee;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create (@Body() body){
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.coffeesService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id : string) {
        return this.coffeesService.remove(id);
    }
}
