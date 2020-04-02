import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DishDocument } from 'src/restaurant/interfaces/DishDocument';
import { Model } from 'mongoose';
import { DishDto } from 'src/restaurant/dtos/DishDto';
import { Dish } from 'src/restaurant/interfaces/Dish';
import { IDishRepository } from 'src/interfaces/IDishRepository';

@Injectable()
export class DishRepository implements IDishRepository {

    constructor(@InjectModel('Dish') private dishModel: Model<DishDocument>){}

    async GetDishById(id: string): Promise<Dish>{
        return await this.dishModel.findById(id);
    }

    async CreateDish(dishDto: DishDto): Promise<Dish>{
        const createdDish = await this.dishModel.create(dishDto)

        createdDish.save();

        return createdDish;
    }

    async DeleteDishById(id: string): Promise<boolean> {
        let dishMaybe = await this.dishModel.findById( { _id: id })

        if(dishMaybe === null)
            return false;

        dishMaybe.remove();

        dishMaybe.save();

        return true;
    }

    async UpdateDishById(id: string, dishDto: DishDto): Promise<Dish | null>{
        let dishMaybe = await this.dishModel.findById(id);

        if(dishMaybe === null)
            return null;

        dishMaybe.name = dishDto.name;
        dishMaybe.type = dishDto.type;
        dishMaybe.price = dishDto.price;

        dishMaybe.save();

        return dishMaybe;
    }
}
