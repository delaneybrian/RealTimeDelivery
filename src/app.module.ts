import { Module } from '@nestjs/common';
import { OrderModule } from './order/OrderModule';
import { RestaurantModule } from './restaurant/RestaurantModule';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseDatabaseModule } from './infrastructure/database/mongoose/MongooseDatabaseModule';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), 
  OrderModule, 
  RestaurantModule, 
  MongooseDatabaseModule],
  controllers: [],
  providers: [],
  exports: [
    MongooseDatabaseModule
  ]
})
export class AppModule {}
