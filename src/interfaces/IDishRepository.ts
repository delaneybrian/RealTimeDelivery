import { Dish } from "src/restaurant/interfaces/Dish";
import { DishDto } from "src/restaurant/dtos/DishDto";

export abstract class IDishRepository{
    public abstract GetDishById(id: string): Promise<Dish>;
    public abstract CreateDish(dishDto: DishDto): Promise<Dish>;
    public abstract DeleteDishById(id: string): Promise<boolean>;
    public abstract UpdateDishById(id: string, dishDto: DishDto): Promise<Dish | null>;
}