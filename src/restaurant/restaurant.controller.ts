import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './interfaces/Restaurant';
import { CreateRestaurantDto } from './dtos/CreateRestaurantDto';
import { RestaurantQueryDto } from './dtos/RestaurantQueryDto';
import { CreateMenuDto } from './dtos/CreateMenuDto';
import { CreateMenuItemDto } from './dtos/CreateMenuItemDto';

@Controller('restaurant')
export class RestaurantController {

    constructor(private restaurantService: RestaurantService){}

    @Get('ByLocation')
    async getRestaurantsByLocation(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantService.GetRestaurantsByLocation(restaurantQuery.location);
    }

    @Get('ByLocationAndTypes')
    async getRestaurantsByLocationAndTypes(@Query() restaurantQuery: RestaurantQueryDto): Promise<Restaurant[]>{
        return this.restaurantService.GetRestaurantsByLocationAndType(restaurantQuery.location, restaurantQuery.type);
    }

    @Post()
    async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto){
        return this.restaurantService.CreateRestaurant(createRestaurantDto)
    }

    @Delete()
    async deleteRestaurantById(@Query() restaurantId: string){
        return this.restaurantService.DeleteRestaurantById(restaurantId);
    }

    @Post()
    async createMenu(@Body() createMenuDto: CreateMenuDto){
        return this.restaurantService.CreateMenu(createMenuDto);
    }

    @Delete()
    async deleteMenuById(@Query() menuId: string){
        return this.restaurantService.DeleteMenuById(menuId);
    }

    @Post()
    async createMenuItem(@Body() createMenuItemDto: CreateMenuItemDto){
        return this.restaurantService.CreateMenuItem(createMenuItemDto);
    }

    @Delete()
    async deleteMenuItemById(@Query() menuItemId: string){
        return this.restaurantService.DeleteMenuItemById(menuItemId);
    }
}
