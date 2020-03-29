import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './interfaces/Restaurant';
import { RestaurantType } from './interfaces/RestaurantType';

@Controller('menu')
export class RestaurantController {

    constructor(private menuService: RestaurantService){}

    @Get()
    async getRestaurantsNearMe(lat: number, lng: number, radius: number): Promise<Restaurant[]>{

    }

    @Get()
    async getRestaurantsNearMeByType(lat: number, lng: number, radius: number, type: RestaurantType[]): Promise<Restaurant>{

    }

}
