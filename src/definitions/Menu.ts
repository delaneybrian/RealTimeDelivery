import { Dish } from './Dish';

export interface Menu{
    id: string;
    name: string;
    items: Dish[];
}