import { RestaurantType } from "./RestaurantType";

export interface Restaurant{
    id: number;
    address: string;
    lat: string;
    lng: string;
    type: RestaurantType;
    menuIds: String[]
}