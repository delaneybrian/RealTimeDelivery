import { RestaurantType } from "../interfaces/RestaurantType";

export class RestaurantQueryDto{
    location: string;
    type: RestaurantType;
}