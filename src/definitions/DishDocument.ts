import { DishType } from './DishType';
import { Document } from 'mongoose';
import { Dish } from './Dish';

export interface DishDocument extends Document, Dish {
    id: string;
    name: string;
    price: number;
    type: DishType;
}