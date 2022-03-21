import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors')
    findAll(){
        return 'this return all coffees';
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        console.log(body);
        return `this action update #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id : string) {
        return `this action removes #${id} coffee`;
    }
}
