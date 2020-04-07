import { PlaceOrderDto } from "src/order/dtos/place-order.dto";
import { Order } from "src/order/interfaces/Order";

export abstract class IOrderRepository{
    public abstract create(createOrderDto: PlaceOrderDto) : Promise<Order>;
    public abstract findById(orderId: String) : Promise<Order>;
}