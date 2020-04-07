import { DishType } from "../../definitions/DishType";

export class DishDto {
    id: string;
    name: string;
    price: number;
    type: DishType;
}
