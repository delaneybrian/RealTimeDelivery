import { Dish } from "../../definitions/Dish";

export class MenuDto {
    id: string;
    name: string;
    items: Dish[];
}