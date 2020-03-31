import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantSchema } from './schemas/restaurant.schema';
import { RestaurantRepositoryService } from './restaurant-repository.service';
import { MenuRepositoryService } from './menu-repository.service';
import { MenuItemSchema } from './schemas/menuItem.schema';
import { MenuSchema } from './schemas/menu.schema';

@Module({ 
    imports: [
        MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }]),
        MongooseModule.forFeature([{ name: 'MenuItem', schema: MenuItemSchema }]),
        MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])],
    controllers: [RestaurantController],
    providers: [RestaurantRepositoryService, MenuRepositoryService]
})
export class RestaurantModule {}
