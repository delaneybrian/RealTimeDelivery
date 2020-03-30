import { Schema } from 'mongoose';
import { MenuItemSchema } from './menuItem.schema';

export const MenuSchema = new Schema({
    id: String,
    name: String,
    items: [MenuItemSchema]
});
