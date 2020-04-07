import { RestaurantType } from './RestaurantType';
import { MenuSummary } from './MenuSummary';

export interface Restaurant{
    id: string;
    name: string;
    address: string;
    location: string;
    type: RestaurantType;
    menuSummaries: MenuSummary[];
}