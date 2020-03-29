import { MenuItem } from './MenuItem';
import { RestaurantType } from './RestaurantType';

export interface Restaurant{
    id: number;
    address: string;
    lat: string;
    lng: string;
    type: Array<RestaurantType>;
    menu: Array<MenuItem>
}