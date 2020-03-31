import { RestaurantType } from './RestaurantType';
import { Document } from 'mongoose';
import { Restaurant } from './Restaurant';

export interface RestaurantDocument extends Document, Restaurant {
    id: number;
    address: string;
    lat: string;
    lng: string;
    type: RestaurantType;
    menuIds: String[]
}