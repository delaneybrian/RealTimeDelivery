import { RestaurantType } from "../../definitions/RestaurantType";

export class RestaurantDto {
    id: string;
    name: string;
    location: string;
    address: string;
    type: RestaurantType;
}