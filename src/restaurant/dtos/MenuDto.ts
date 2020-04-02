import { Dish } from "../interfaces/Dish";

export class MenuDto {
    id: string;
    name: string;
    items: Dish[];
}