import { DishType } from "../interfaces/DishType";

export class DishDto {
    id: string;
    name: string;
    price: number;
    type: DishType;
}
