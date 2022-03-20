import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll(){
        return "this return all coffees";
    }

}
