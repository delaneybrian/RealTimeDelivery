import { MenuItemType } from './MenuItemType';
import { Document } from 'mongoose';
import { MenuItem } from './MenuItem';

export interface MenuItemDocument extends Document, MenuItem {
    id: number;
    name: string;
    price: number;
    type: MenuItemType;
}