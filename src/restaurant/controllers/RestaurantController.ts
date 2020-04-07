import { Controller, Get, Post, Body, Query, Delete, Param } from '@nestjs/common';
import { RestaurantDto } from '../dtos/RestaurantDto';
import { RestaurantQueryDto } from '../dtos/RestaurantQueryDto';
import { Restaurant } from '../../definitions/Restaurant';
import { IRestaurantRepository } from 'src/interfaces/IRestaurantRepository';

@Controller('restaurants')
export class RestaurantController {

    constructor(private restaurantRepository: IRestaurantRepository){}

    @Get(':id')
    async getRestaurantById(@Param('id') id: string): Promise<Restaurant>{
        return this.restaurantRepository.GetRestaurantById(id);
    }

    @Get('ByLocation')
    async getRestaurantsByLocation(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantRepository.GetRestaurantsByLocation(restaurantQuery.location);
    }

    @Get('ByLocationAndTypes')
    async getRestaurantsByLocationAndTypes(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantRepository.GetRestaurantsByLocationAndType(restaurantQuery.location, restaurantQuery.type);
    }

    @Post()
    async createRestaurant(@Body() restaurantDto: RestaurantDto){
        return this.restaurantRepository.CreateRestaurant(restaurantDto)
    }

    @Delete('id')
    async deleteRestaurantById(@Param('id') id: string){
        return this.restaurantRepository.DeleteRestaurantById(id);
    }

    // @Post('addmenu')
    // async addMenuToRestaurant(@Query('restaurantId') restaurantId: string, @Query('menuId') menuId: string){
    //     this.restaurantRepository.AddMenuToRestaurant(restaurantId, menuId);
    // }

    // @Delete('deletemenu')
    // async deleteMenuFromRestaurant(@Query('restaurantId') restaurantId: string, @Query('menuId') menuId: string){
    //     this.restaurantRepository.DeleteMenuFromRestaurant(restaurantId, menuId);
    // }
}
