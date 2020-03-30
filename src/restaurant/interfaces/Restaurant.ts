import { RestaurantType } from './RestaurantType';
import { Menu } from './Menu';

export interface Restaurant{
    id: number;
    address: string;
    lat: string;
    lng: string;
    type: RestaurantType;
    menus: Menu[]
}