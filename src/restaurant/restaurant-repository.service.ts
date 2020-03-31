import { Injectable } from '@nestjs/common';
import { RestaurantDocument } from './interfaces/RestaurantDocument';
import { CreateRestaurantDto } from './dtos/CreateRestaurantDto';
import { RestaurantType } from './interfaces/RestaurantType';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './interfaces/Restaurant';

@Injectable()
export class RestaurantRepositoryService {

    constructor(@InjectModel('Restaurant') private restaurantModel: Model<RestaurantDocument>){}

    async GetRestaurantsByLocation(location: String): Promise<Restaurant[]> {
        let restaurants = await this.restaurantModel
        .find( { location: location })
        .exec();

        return restaurants;
    }

    async GetRestaurantsByLocationAndType(location: String, type: RestaurantType): Promise<Restaurant[]>{
         let restaurants = await this.restaurantModel
        .find( { location: location, type: type })
        .exec();

        return restaurants;
    }

    async CreateRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>{
        const createdRestaurant = new this.restaurantModel(createRestaurantDto);

        createdRestaurant.save()

        return createdRestaurant;
    }

    async DeleteRestaurantById(restaurantId: String){
        this.restaurantModel.deleteOne( { id: restaurantId })
    }

    async AddMenuToRestaurant(restaurantId: string, menuId: string): Promise<Restaurant> {
        let restaurant = await this.restaurantModel.findOne( {id: restaurantId })

        restaurant.menuIds.push(menuId);

        restaurant.save();

        return restaurant;
    }
}
