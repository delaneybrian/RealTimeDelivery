import { DishDocument } from './DishDocument';
import { Document } from 'mongoose';
import { Menu } from './Menu';

export interface MenuDocument extends Document, Menu {
    id: string;
    name: string;
    items: DishDocument[];
}