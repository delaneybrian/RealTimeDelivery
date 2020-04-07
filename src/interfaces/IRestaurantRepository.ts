import { RestaurantDto } from "src/restaurant/dtos/RestaurantDto";
import { Restaurant } from "src/definitions/Restaurant";
import { RestaurantType } from "src/definitions/RestaurantType";

export abstract class IRestaurantRepository{
    public abstract GetRestaurantById(id: string): Promise<Restaurant>;
    public abstract GetRestaurantsByLocation(location: string): Promise<Restaurant[]>;
    public abstract GetRestaurantsByLocationAndType(location: string, type: RestaurantType): Promise<Restaurant[]>;
    public abstract CreateRestaurant(restaurantDto: RestaurantDto): Promise<Restaurant>;
    public abstract DeleteRestaurantById(id: string);
}