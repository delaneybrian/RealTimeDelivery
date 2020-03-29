import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlaceOrderDto } from './dtos/place-order.dto';
import { Order } from './interfaces/Order';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

    async create(createOrderDto: PlaceOrderDto) : Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return createdOrder.save();
    }

    async findById(id: String) : Promise<Order>{
        return this.orderModel.find().exec();
    }

}
