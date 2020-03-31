import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantSchema } from './schemas/restaurant.schema';
import { RestaurantRepositoryService } from './restaurant-repository.service';
import { MenuRepositoryService } from './menu-repository.service';

@Module({ 
    imports: [MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }])],
    controllers: [RestaurantController],
    providers: [RestaurantRepositoryService, MenuRepositoryService]
})
export class RestaurantModule {}
