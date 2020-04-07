import { Module } from '@nestjs/common';
import { RestaurantController } from './controllers/RestaurantController';
import { MenuController } from './controllers/MenuController';
import { DishController } from 'src/restaurant/controllers/DishController';

@Module({ 
    imports: [],
    controllers: [RestaurantController, MenuController, DishController],
    providers: [],
})
export class RestaurantModule {}
