import { RestaurantType } from "../interfaces/RestaurantType";

export class CreateRestaurantDto {
    id: string;
    name: string;
    location: string;
    address: string;
    type: RestaurantType;
}