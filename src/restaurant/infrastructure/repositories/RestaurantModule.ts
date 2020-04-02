import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from '../../controllers/RestaurantController';
import { RestaurantSchema } from '../../schemas/RestaurantSchema';
import { RestaurantRepository } from './RestaurantRepository';
import { MenuRepository } from './MenuRepository';
import { DishSchema } from '../../schemas/DishSchema';
import { MenuSchema } from '../../schemas/MenuSchema';
import { MenuController } from '../../controllers/MenuController';
import { DishController } from 'src/restaurant/controllers/DishController';
import { DishRepository } from './DishRepository';

@Module({ 
    imports: [
        MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }]),
        MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]),
        MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])],
    controllers: [RestaurantController, MenuController, DishController],
    providers: [RestaurantRepository, MenuRepository, DishRepository]
})
export class RestaurantModule {}
