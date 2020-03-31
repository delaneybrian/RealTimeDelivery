import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PlaceOrderDto } from './dtos/place-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService){}

    @Post()
    async createOrder(@Body() createOrderDto: PlaceOrderDto){
        this.orderService.create(createOrderDto);
    }

    @Get()
    async getOrderById(@Query() id: string): Promise<PlaceOrderDto>{
        return this.orderService.findById(id);
    }

}
