import { Injectable } from '@nestjs/common';
import { RestaurantDocument } from '../../../definitions/RestaurantDocument';
import { RestaurantDto } from '../../../restaurant/dtos/RestaurantDto';
import { RestaurantType } from '../../../definitions/RestaurantType';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../../../definitions/Restaurant';
import * as _ from 'lodash';
import { MenuDocument } from '../../../definitions/MenuDocument';
import { IRestaurantRepository } from 'src/interfaces/IRestaurantRepository';

@Injectable()
export class MongooseRestaurantRepository implements IRestaurantRepository {

    constructor(@InjectModel('Restaurant') private restaurantModel: Model<RestaurantDocument>){}

    async GetRestaurantById(id: string): Promise<Restaurant>{
        return await this.restaurantModel.findById(id);
    }

    async GetRestaurantsByLocation(location: string): Promise<Restaurant[]> {
        let restaurants = await this.restaurantModel
        .find( { location: location })
        .exec();

        return restaurants;
    }

    async GetRestaurantsByLocationAndType(location: string, type: RestaurantType): Promise<Restaurant[]>{
         let restaurants = await this.restaurantModel
        .find( { location: location, type: type })
        .exec();

        return restaurants;
    }

    async CreateRestaurant(restaurantDto: RestaurantDto): Promise<Restaurant>{
        const createdRestaurant = new this.restaurantModel(restaurantDto);

        createdRestaurant.save()

        return createdRestaurant;
    }

    async DeleteRestaurantById(id: string){
        await this.restaurantModel.findByIdAndDelete(id)
    }

    // async DeleteMenuFromRestaurant(restaurantId: string, menuId: string): Promise<Restaurant> {

    //     const restaurant = await this.restaurantModel.findOne( {id: restaurantId});

    //     _.remove(restaurant.menuSummaries, (menuSummary) => {return menuSummary.id === menuId});

    //     restaurant.save();

    //     return restaurant;
    // }

    // async AddMenuToRestaurant(restaurantId: string, menuId: string): Promise<Restaurant> {

    //     let restaurant = await this.restaurantModel.findOne( {id: restaurantId});

    //     let menu = await this.menuModel.findOne( {id: menuId} );

    //     restaurant.menuSummaries.push(menu);

    //     restaurant.save();

    //     return restaurant;
    // }
}
