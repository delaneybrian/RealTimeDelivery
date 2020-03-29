import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './interfaces/Restaurant';

@Injectable()
export class RestaurantService {

    constructor(@InjectModel('Order') private orderModel: Model<Restaurant>){}


}
