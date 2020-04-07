import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlaceOrderDto } from '../../../order/dtos/place-order.dto';
import { OrderDocument } from '../../../order/interfaces/OrderDocument';
import { Order } from '../../../order/interfaces/Order';
import { IOrderRepository } from 'src/interfaces/IOrderRepository';

@Injectable()
export class MongooseOrderRepository implements IOrderRepository {
    constructor(@InjectModel('Order') private orderModel: Model<OrderDocument>) {}

    async create(createOrderDto: PlaceOrderDto) : Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }

    async findById(orderId: String) : Promise<Order>{
        return this.orderModel
        .findOne({id: orderId})
        .exec();
    }
}
