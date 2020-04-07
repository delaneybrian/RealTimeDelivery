import { Module } from '@nestjs/common';
import { DishSchema } from "./schemas/DishSchema";
import { MenuSchema } from "./schemas/MenuSchema";
import { MongooseModule } from "@nestjs/mongoose";
import { RestaurantSchema } from './schemas/RestaurantSchema';
import { IDishRepository } from 'src/interfaces/IDishRepository';
import { MongooseDishRepository } from './MongooseDishRepository';
import { IRestaurantRepository } from 'src/interfaces/IRestaurantRepository';
import { IMenuRepository } from 'src/interfaces/IMenuRepository';
import { IOrderRepository } from 'src/interfaces/IOrderRepository';
import { MongooseRestaurantRepository } from './MongooseRestaurantRepository';
import { MongooseMenuRepository } from './MongooseMenuRepository';
import { MongooseOrderRepository } from './MongooseOrderRepository';
import { OrderSchema } from 'src/order/schemas/OrderSchema';

@Module({ 
    imports: [
        MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }]),
        MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]),
        MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
        MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }],
        )],
    providers: [
        {provide: IDishRepository, useClass: MongooseDishRepository},
        {provide: IRestaurantRepository, useClass: MongooseRestaurantRepository},
        {provide: IMenuRepository, useClass: MongooseMenuRepository},
        {provide: IOrderRepository, useClass: MongooseOrderRepository}
    ],
    controllers: [],
    exports: [
        {provide: IDishRepository, useClass: MongooseDishRepository},
        {provide: IRestaurantRepository, useClass: MongooseRestaurantRepository},
        {provide: IMenuRepository, useClass: MongooseMenuRepository},
        {provide: IOrderRepository, useClass: MongooseOrderRepository}
    ]
})
export class MongooseDatabaseModule {}