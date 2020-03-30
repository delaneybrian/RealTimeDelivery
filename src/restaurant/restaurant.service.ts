import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './interfaces/Restaurant';
import { RestaurantType } from './interfaces/RestaurantType';
import { CreateRestaurantDto } from './dtos/CreateRestaurantDto';
import { CreateMenuDto } from './dtos/CreateMenuDto';
import { CreateMenuItemDto } from './dtos/CreateMenuItemDto';

@Injectable()
export class RestaurantService {

    constructor(@InjectModel('Restaurant') private restaurantModel: Model<Restaurant>){}

    async GetRestaurantsByLocation(location: String): Promise<Restaurant[]> {
        return this.restaurantModel
        .find( { location: location })
        .exec();
    }

    async GetRestaurantsByLocationAndType(location: String, type: RestaurantType): Promise<Restaurant[]>{
        console.log(type);
        return this.restaurantModel
        .find( { location: location, type: type })
        .exec();
    }

    async CreateRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<void>{
        const createdRestaurant = new this.restaurantModel(createRestaurantDto);

        createdRestaurant.save()
    }

    async DeleteRestaurant(restaurantId: String){
        this.restaurantModel.DeleteRestaurant( { id: restaurantId })
    }

    async AddMenuToRestaurant(){

    }

    async AddMenuItemToMenu(){

    }

    async CreateMenu(CreateMenuDto: CreateMenuDto): Promise<void> {
        this.restaurantModel.find( {id: })
    }

    async DeleteMenu(menuId: String): Promise<void> {
        this.restaurantModel.find( {id: })
    }

    async CreateMenuItem(CreateMenuItemDto: CreateMenuItemDto): Promise<void>{

    }

    async DeleteMenuItem(menuId: String): Promise<void> {
        this.restaurantModel.find( {id: })
    }
}
