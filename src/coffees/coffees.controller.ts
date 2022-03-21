import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors')
    findAll(@Res() response){
        response.status(200).send("this return all coffees");
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `this return this #${id} coffee`;
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create (@Body() body){
        console.log(body)
        return body;
        // return `This action creates a coffee`;
    }
}
