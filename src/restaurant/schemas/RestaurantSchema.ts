import { Schema } from 'mongoose';
import { MenuSummarySchema } from './MenuSummarySchema';

export const RestaurantSchema = new Schema({
    name: String,
    address: String,
    location: String,
    type: String,
    meunSummaries: [MenuSummarySchema]
});