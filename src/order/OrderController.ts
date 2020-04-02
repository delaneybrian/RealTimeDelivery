import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PlaceOrderDto } from './dtos/place-order.dto';
import { OrderRepository } from './OrderRepository';

@Controller('order')
export class OrderController {

    constructor(private orderRepository: OrderRepository){}

    @Post()
    async createOrder(@Body() createOrderDto: PlaceOrderDto){
        this.orderRepository.create(createOrderDto);
    }

    @Get()
    async getOrderById(@Query() id: string): Promise<PlaceOrderDto>{
        return this.orderRepository.findById(id);
    }
}
