import { RestaurantType } from './RestaurantType';
import { Document } from 'mongoose';
import { Restaurant } from './Restaurant';
import { MenuSummary } from './MenuSummary';

export interface RestaurantDocument extends Document, Restaurant {
    id: string;
    name: string;
    address: string;
    location: string;
    type: RestaurantType;
    meunSummaries: MenuSummary[];
}