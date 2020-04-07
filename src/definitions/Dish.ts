import { DishType } from './DishType';

export interface Dish {
    id: string;
    name: string;
    price: number;
    type: DishType;
}