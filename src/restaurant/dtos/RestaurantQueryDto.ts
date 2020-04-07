import { RestaurantType } from "../../definitions/RestaurantType";

export class RestaurantQueryDto{
    location: string;
    type: RestaurantType;
}