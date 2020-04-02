import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './OrderController';
import { OrderSchema } from './schemas/OrderSchema';
import { OrderRepository } from './OrderRepository';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderRepository],
    exports: []
})
export class OrderModule {}
