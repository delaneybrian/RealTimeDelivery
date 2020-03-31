import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), OrderModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
