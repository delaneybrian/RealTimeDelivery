import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { CreateRestaurantDto } from '../dtos/CreateRestaurantDto';
import { RestaurantQueryDto } from '../dtos/RestaurantQueryDto';
import { RestaurantRepositoryService } from '../restaurant-repository.service';
import { Restaurant } from '../interfaces/Restaurant';

@Controller('restaurant')
export class RestaurantController {

    constructor(private restaurantRepositoryService: RestaurantRepositoryService){}

    @Get('ByLocation')
    async getRestaurantsByLocation(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantRepositoryService.GetRestaurantsByLocation(restaurantQuery.location);
    }

    @Get('ByLocationAndTypes')
    async getRestaurantsByLocationAndTypes(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantRepositoryService.GetRestaurantsByLocationAndType(restaurantQuery.location, restaurantQuery.type);
    }

    @Post()
    async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto){
        return this.restaurantRepositoryService.CreateRestaurant(createRestaurantDto)
    }

    @Delete()
    async deleteRestaurantById(@Query() restaurantId: string){
        return this.restaurantRepositoryService.DeleteRestaurantById(restaurantId);
    }
}
