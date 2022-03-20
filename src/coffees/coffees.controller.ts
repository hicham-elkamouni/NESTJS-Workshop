import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors')
    findAll(){
        return "this return all coffees";
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `this return this #${id} coffee`;
    }

    @Post()
    create (@Body('lastname') body){
        console.log(body)
        return body;
        // return `This action creates a coffee`;
    }
}
