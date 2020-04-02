import { PlaceOrderDto } from "src/order/dtos/place-order.dto";
import { Order } from "src/order/interfaces/Order";

export interface IOrderRepository{
    create(createOrderDto: PlaceOrderDto) : Promise<Order>,
    findById(orderId: String) : Promise<Order>
}