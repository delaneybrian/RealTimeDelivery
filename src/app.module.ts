import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), OrderModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
