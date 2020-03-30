import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderSchema } from './schemas/order.schema';
import { OrderService } from './order.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderService],
    exports: []
})
export class OrderModule {}