import { Module } from '@nestjs/common';
import { OrderModule } from './order/OrderModule';
import { RestaurantModule } from './restaurant/RestaurantModule';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), OrderModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
